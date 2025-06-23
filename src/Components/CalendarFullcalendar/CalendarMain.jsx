import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/dayGrid';
import timeGridPlugin from '@fullcalendar/timeGrid';
import listPlugin from '@fullcalendar/list';
import fasdatec from '../Dashboard/dashboard.module.scss';

export default function Calendar() {
  // Función para cargar eventos desde localStorage
  const loadEventsFromStorage = () => {
    try {
      const savedEvents = localStorage.getItem('calendarEvents');
      if (savedEvents) {
        return JSON.parse(savedEvents);
      }
    } catch (error) {
      console.error('Error loading events from localStorage:', error);
    }

    // Eventos por defecto si no hay datos guardados
    return [
      {
        id: '1',
        title: 'Publicación 1',
        date: '2023-11-09',
        type: 'publicacion',
        description: 'Descripción de la publicación 1',
        reminder: false,
        backgroundColor: '#45b7d1',
        borderColor: '#45b7d1'
      },
      {
        id: '2',
        title: 'Publicación 2',
        date: '2023-11-10',
        type: 'publicacion',
        description: 'Descripción de la publicación 2',
        reminder: false,
        backgroundColor: '#45b7d1',
        borderColor: '#45b7d1'
      }
    ];
  };

  // Función para guardar eventos en localStorage
  const saveEventsToStorage = (events) => {
    try {
      localStorage.setItem('calendarEvents', JSON.stringify(events));
    } catch (error) {
      console.error('Error saving events to localStorage:', error);
    }
  };

  // Estados para manejar eventos y modales
  const [events, setEvents] = useState(loadEventsFromStorage());
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Estados del formulario
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    type: 'evento',
    reminder: false,
    reminderTime: '15',
    priority: 'normal'
  });

  // Estados para alertas y notificaciones
  const [notifications, setNotifications] = useState([]);
  const [showAllEventsModal, setShowAllEventsModal] = useState(false);
  const [showImportantDatesModal, setShowImportantDatesModal] = useState(false);

  // Tipos de eventos con colores
  const eventTypes = {
    evento: { color: '#378006', label: 'Evento' },
    recordatorio: { color: '#ff6b6b', label: 'Recordatorio' },
    fecha_importante: { color: '#4ecdc4', label: 'Fecha Importante' },
    publicacion: { color: '#45b7d1', label: 'Publicación' },
    cita: { color: '#f9ca24', label: 'Cita' },
    cumpleanos: { color: '#f0932b', label: 'Cumpleaños' }
  };

  // Guardar eventos en localStorage cada vez que cambien
  useEffect(() => {
    saveEventsToStorage(events);
  }, [events]);

  // Función para mostrar notificaciones
  const showNotification = (title, description) => {
    const notification = {
      id: Date.now(),
      title: title,
      description: description,
      timestamp: new Date().toLocaleString('es-ES')
    };

    setNotifications(prev => [notification, ...prev]);

    // Auto eliminar después de 5 segundos
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== notification.id));
    }, 5000);
  };

  // Efecto para verificar recordatorios
  useEffect(() => {
    const checkReminders = () => {
      const now = new Date();
      const upcomingEvents = events.filter(event => {
        if (!event.reminder) return false;

        const eventDateTime = event.time ?
          new Date(event.date + 'T' + event.time) :
          new Date(event.date);

        const reminderTime = parseInt(event.reminderTime || '15');
        const reminderDate = new Date(eventDateTime.getTime() - (reminderTime * 60000));

        return now >= reminderDate && now <= eventDateTime && !event.notified;
      });

      upcomingEvents.forEach(event => {
        showNotification('Recordatorio: ' + event.title, event.description || '');
        // Marcar como notificado
        setEvents(prev => prev.map(e =>
          e.id === event.id ? { ...e, notified: true } : e
        ));
      });
    };

    const interval = setInterval(checkReminders, 60000);
    return () => clearInterval(interval);
  }, [events]);

  // Manejar clic en evento
  const handleEventClick = (clickInfo) => {
    const event = events.find(e => e.id === clickInfo.event.id);
    if (event) {
      setSelectedEvent(event);
      setIsEditing(true);
      setFormData({
        title: event.title,
        description: event.description || '',
        date: event.date.split('T')[0], // Solo la fecha sin la hora
        time: event.time || '',
        type: event.type || 'evento',
        reminder: event.reminder || false,
        reminderTime: event.reminderTime || '15',
        priority: event.priority || 'normal'
      });
      setShowModal(true);
    }
  };

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Guardar evento
  const handleSaveEvent = () => {
    if (!formData.title.trim()) {
      alert('El título es obligatorio');
      return;
    }

    const eventColor = eventTypes[formData.type]?.color || '#378006';

    const eventData = {
      id: isEditing ? selectedEvent.id : Date.now().toString(),
      title: formData.title,
      date: formData.date + (formData.time ? 'T' + formData.time : ''),
      description: formData.description,
      type: formData.type,
      reminder: formData.reminder,
      reminderTime: formData.reminderTime,
      priority: formData.priority,
      backgroundColor: eventColor,
      borderColor: eventColor,
      time: formData.time,
      notified: false
    };

    if (isEditing) {
      setEvents(prev => {
        const updatedEvents = prev.map(event =>
          event.id === selectedEvent.id ? eventData : event
        );
        return updatedEvents;
      });
      showNotification('Evento actualizado', formData.title + ' ha sido actualizado exitosamente');
    } else {
      setEvents(prev => {
        const newEvents = [...prev, eventData];
        return newEvents;
      });
      showNotification('Evento creado', formData.title + ' ha sido creado exitosamente');
    }

    setShowModal(false);
    closeModal();
  };

  // Eliminar evento
  const handleDeleteEvent = () => {
    if (selectedEvent && window.confirm('¿Estás seguro de que quieres eliminar este evento?')) {
      setEvents(prev => {
        const filteredEvents = prev.filter(event => event.id !== selectedEvent.id);
        return filteredEvents;
      });
      setShowModal(false);
      showNotification('Evento eliminado', selectedEvent.title + ' ha sido eliminado');
      closeModal();
    }
  };

  // Cerrar modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
    setIsEditing(false);
    // Limpiar formulario
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      type: 'evento',
      reminder: false,
      reminderTime: '15',
      priority: 'normal'
    });
  };

  // Función para mostrar fechas importantes - MEJORADA
  const showImportantDates = () => {
    const importantEvents = events.filter(event =>
      event.type === 'fecha_importante' || event.priority === 'alta'
    );

    if (importantEvents.length === 0) {
      alert('No hay fechas importantes marcadas');
      return;
    }

    setShowImportantDatesModal(true);
  };

  // Función para crear nuevo evento
  const createNewEvent = () => {
    const today = new Date().toISOString().split('T')[0];
    setSelectedEvent(null);
    setIsEditing(false);
    setFormData({
      title: '',
      description: '',
      date: today,
      time: '',
      type: 'evento',
      reminder: false,
      reminderTime: '15',
      priority: 'normal'
    });
    setShowModal(true);
  };

  // Función para mostrar todos los eventos
  const showAllEvents = () => {
    setShowAllEventsModal(true);
  };

  // Función para editar evento desde la lista
  const handleEditFromList = (event) => {
    setSelectedEvent(event);
    setIsEditing(true);
    setFormData({
      title: event.title,
      description: event.description || '',
      date: event.date.split('T')[0],
      time: event.time || '',
      type: event.type || 'evento',
      reminder: event.reminder || false,
      reminderTime: event.reminderTime || '15',
      priority: event.priority || 'normal'
    });
    setShowAllEventsModal(false);
    setShowModal(true);
  };

  // Función para eliminar evento desde la lista
  const handleDeleteFromList = (eventToDelete) => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar "${eventToDelete.title}"?`)) { // FIX APPLIED HERE
      setEvents(prev => prev.filter(event => event.id !== eventToDelete.id));
      showNotification('Evento eliminado', eventToDelete.title + ' ha sido eliminado');
    }
  };

  // Función para formatear fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Función para formatear hora
  const formatTime = (timeString) => {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const date = new Date();
    date.setHours(parseInt(hours), parseInt(minutes));
    return date.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Función para limpiar todos los eventos (útil para pruebas)
  const clearAllEvents = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar TODOS los eventos? Esta acción no se puede deshacer.')) {
      setEvents([]);
      localStorage.removeItem('calendarEvents');
      showNotification('Eventos eliminados', 'Todos los eventos han sido eliminados');
    }
  };

  // Obtener fechas importantes para el modal
  const getImportantEvents = () => {
    return events.filter(event =>
      event.type === 'fecha_importante' || event.priority === 'alta'
    ).sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(6, 6, 46, 0.877)', // Similar to backdrop from MySwal
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    },
    content: {
      backgroundColor: 'rgba(18, 18, 43, 0.92)', // Similar to background from MySwal
      color: '#fff', // Text color as in MySwal
      padding: '30px',
      borderRadius: '10px',
      minWidth: '400px',
      maxWidth: '500px',
      maxHeight: '80vh',
      overflowY: 'auto',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
    },
    input: {
      width: '100%',
      padding: '10px 12px', // Increased padding for better appearance
      border: '1px solid #555', // Darker border for contrast on dark background
      borderRadius: '4px',
      fontSize: '14px',
      boxSizing: 'border-box',
      backgroundColor: '#333', // Dark background for inputs
      color: '#eee', // Light text color for inputs
      outline: 'none', // Remove outline on focus
    },
    label: {
      display: 'block',
      marginBottom: '8px', // Increased margin
      fontWeight: 'bold',
      color: '#fff' // White text for labels
    },
    formGroup: {
      marginBottom: '20px' // Increased margin
    },
    flexGroup: {
      display: 'flex',
      gap: '20px', // Increased gap
      marginBottom: '20px' // Increased margin
    },
    flexItem: {
      flex: 1
    },
    buttonGroup: {
      display: 'flex',
      gap: '15px', // Increased gap
      justifyContent: 'flex-end',
      marginTop: '30px' // Increased margin
    },
    button: {
      padding: '12px 25px', // Larger buttons
      border: 'none',
      borderRadius: '5px', // Slightly more rounded
      cursor: 'pointer',
      fontSize: '15px', // Slightly larger font
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease, transform 0.1s ease', // Smooth transitions
      '&:hover': {
        transform: 'translateY(-1px)'
      }
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: 'white',
      '&:hover': {
        backgroundColor: '#c82333'
      }
    },
    cancelButton: {
      backgroundColor: '#6c757d',
      color: 'white',
      '&:hover': {
        backgroundColor: '#5a6268'
      }
    },
    saveButton: {
      backgroundColor: '#28a745',
      color: 'white',
      '&:hover': {
        backgroundColor: '#218838'
      }
    },
    // Estilos específicos para el modal de fechas importantes
    importantDatesContent: {
      backgroundColor: 'rgba(18, 18, 43, 0.92)', // Same as general content background
      color: '#fff', // White text
      padding: '30px',
      borderRadius: '10px',
      minWidth: '500px',
      maxWidth: '600px',
      maxHeight: '80vh',
      overflowY: 'auto',
      boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
      border: '1px solid #4ecdc4' // Retain some highlight
    },
    importantEventCard: {
      backgroundColor: '#2a2a4a', // Slightly lighter dark background for cards
      border: '1px solid #4ecdc4',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '15px',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer',
      color: '#eee' // Light text color for card content
    },
    importantEventCardHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 4px 12px rgba(78, 205, 196, 0.2)'
    },
    eventTitle: {
      color: '#fff', // White title
      fontSize: '18px', // Larger title
      fontWeight: 'bold',
      marginBottom: '8px' // Increased margin
    },
    eventDate: {
      color: '#4ecdc4', // Highlight color
      fontSize: '15px',
      fontWeight: '600',
      marginBottom: '8px'
    },
    eventDescription: {
      color: '#ccc', // Lighter grey for description
      fontSize: '14px',
      lineHeight: '1.5'
    },
    eventType: {
      display: 'inline-block',
      backgroundColor: '#4ecdc4',
      color: 'white',
      padding: '5px 10px', // Larger badge
      borderRadius: '15px', // More rounded
      fontSize: '12px',
      fontWeight: 'bold',
      marginTop: '10px'
    },
    priorityBadge: {
      display: 'inline-block',
      backgroundColor: '#e74c3c',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '15px',
      fontSize: '12px',
      fontWeight: 'bold',
      marginTop: '10px',
      marginLeft: '10px'
    },
    emptyState: {
      textAlign: 'center',
      padding: '40px 20px',
      color: '#aaa' // Lighter grey for empty state
    },
    emptyIcon: {
      fontSize: '60px', // Larger icon
      marginBottom: '20px', // Increased margin
      color: '#666' // Darker grey for icon
    }
  };

  const notificationStyles = {
    container: {
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 1000,
      maxWidth: '300px'
    },
    notification: {
      backgroundColor: '#4caf50',
      color: 'white',
      padding: '15px',
      marginBottom: '10px',
      borderRadius: '5px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      animation: 'slideIn 0.3s ease-out'
    }
  };

  return (
    <div className={fasdatec.commu_contain_calendar}>
      {/* Indicador de estado de guardado */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        background: '#28a745',
        color: 'white',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '12px',
        zIndex: 100
      }}>
        ✓ Eventos guardados automáticamente ({events.length} eventos)
      </div>

      {/* Notificaciones */}
      {notifications.length > 0 && (
        <div style={notificationStyles.container}>
          {notifications.map(notification => (
            <div key={notification.id} style={notificationStyles.notification}>
              <strong>{notification.title}</strong>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>{notification.description}</p>
              <small>{notification.timestamp}</small>
            </div>
          ))}
        </div>
      )}

      {/* Calendario */}
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
        initialView='dayGridMonth'
        locale='es'
        dayMaxEvents={true}
        weekends={true}
        eventClick={handleEventClick}

        customButtons={{
          addEvent: {
            text: 'Nuevo Evento',
            click: createNewEvent
          },
          importantDates: {
            text: 'Fechas Importantes',
            click: showImportantDates
          },
          allEvents: {
            text: 'Todos los Eventos',
            click: showAllEvents
          },
          clearEvents: {
            text: 'Limpiar Todo',
            click: clearAllEvents
          }
        }}

        headerToolbar={{
          left: 'prev,next today addEvent',
          center: 'title',
          right: 'clearEvents,allEvents,importantDates dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        }}

        buttonText={{
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          list: "Lista"
        }}

        events={events}
        eventDisplay='block'
        height='auto'
      />

      {/* Modal para crear/editar eventos */}
      {showModal && (
        <div style={modalStyles.overlay} onClick={(e) => e.target === e.currentTarget && closeModal()}>
          <div style={modalStyles.content}>
            <h3 style={{ marginTop: 0, color: '#fff', textAlign: 'center', marginBottom: '25px' }}> {/* Adjusted header */}
              {isEditing ? 'Editar Evento' : 'Nuevo Evento'}
            </h3>

            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Título *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                style={modalStyles.input}
                placeholder="Título del evento"
              />
            </div>

            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Descripción</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                style={{ ...modalStyles.input, resize: 'vertical' }}
                placeholder="Descripción o comentarios adicionales"
              />
            </div>

            <div style={modalStyles.flexGroup}>
              <div style={modalStyles.flexItem}>
                <label style={modalStyles.label}>Fecha</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  style={modalStyles.input}
                />
              </div>

              <div style={modalStyles.flexItem}>
                <label style={modalStyles.label}>Hora (opcional)</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  style={modalStyles.input}
                />
              </div>
            </div>

            <div style={modalStyles.flexGroup}>
              <div style={modalStyles.flexItem}>
                <label style={modalStyles.label}>Tipo de Evento</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  style={modalStyles.input}
                >
                  {Object.entries(eventTypes).map(([key, value]) => (
                    <option key={key} value={key}>{value.label}</option>
                  ))}
                </select>
              </div>

              <div style={modalStyles.flexItem}>
                <label style={modalStyles.label}>Prioridad</label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  style={modalStyles.input}
                >
                  <option value="baja">Baja</option>
                  <option value="normal">Normal</option>
                  <option value="alta">Alta</option>
                </select>
              </div>
            </div>

            <div style={modalStyles.formGroup}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', color: '#fff' }}>
                <input
                  type="checkbox"
                  name="reminder"
                  checked={formData.reminder}
                  onChange={handleInputChange}
                  style={{ transform: 'scale(1.2)' }} // Slightly larger checkbox
                />
                Activar recordatorio
              </label>
            </div>

            {formData.reminder && (
              <div style={{ ...modalStyles.formGroup, marginLeft: '20px' }}>
                <label style={modalStyles.label}>Recordar con</label>
                <select
                  name="reminderTime"
                  value={formData.reminderTime}
                  onChange={handleInputChange}
                  style={modalStyles.input}
                >
                  <option value="5">5 minutos antes</option>
                  <option value="15">15 minutos antes</option>
                  <option value="30">30 minutos antes</option>
                  <option value="60">1 hora antes</option>
                  <option value="1440">1 día antes</option>
                </select>
              </div>
            )}

            <div style={modalStyles.buttonGroup}>
              {isEditing && (
                <button
                  onClick={handleDeleteEvent}
                  style={{ ...modalStyles.button, ...modalStyles.deleteButton }}
                >
                  Eliminar
                </button>
              )}

              <button
                onClick={closeModal}
                style={{ ...modalStyles.button, ...modalStyles.cancelButton }}
              >
                Cancelar
              </button>

              <button
                onClick={handleSaveEvent}
                style={{ ...modalStyles.button, ...modalStyles.saveButton }}
              >
                {isEditing ? 'Actualizar' : 'Guardar'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para mostrar fechas importantes - NUEVO */}
      {showImportantDatesModal && (
        <div style={modalStyles.overlay} onClick={(e) => e.target === e.currentTarget && setShowImportantDatesModal(false)}>
          <div style={modalStyles.importantDatesContent}>
            <h3 style={{
              marginTop: 0,
              color: '#fff', // White text
              textAlign: 'center',
              fontSize: '28px', // Larger title
              marginBottom: '25px',
              borderBottom: '2px solid #4ecdc4',
              paddingBottom: '10px'
            }}>
              📅 Fechas Importantes
            </h3>

            {getImportantEvents().length === 0 ? (
              <div style={modalStyles.emptyState}>
                <div style={modalStyles.emptyIcon}>📅</div>
                <h4>No hay fechas importantes</h4>
                <p>Marca eventos como "Fecha Importante" o con prioridad "Alta" para que aparezcan aquí.</p>
              </div>
            ) : (
              <div>
                {getImportantEvents().map((event, index) => (
                  <div
                    key={event.id}
                    style={modalStyles.importantEventCard}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(78, 205, 196, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0px)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    onClick={() => {
                      setShowImportantDatesModal(false);
                      handleEditFromList(event);
                    }}
                  >
                    <div style={modalStyles.eventTitle}>
                      {event.title}
                    </div>

                    <div style={modalStyles.eventDate}>
                      📅 {formatDate(event.date)}
                      {event.time && (
                        <span style={{ marginLeft: '15px' }}> {/* Increased margin */}
                          🕒 {formatTime(event.time)}
                        </span>
                      )}
                    </div>

                    {event.description && (
                      <div style={modalStyles.eventDescription}>
                        {event.description}
                      </div>
                    )}

                    <div>
                      <span style={{
                        ...modalStyles.eventType,
                        backgroundColor: eventTypes[event.type]?.color || '#4ecdc4'
                      }}>
                        {eventTypes[event.type]?.label || 'Evento'}
                      </span>

                      {event.priority === 'alta' && (
                        <span style={modalStyles.priorityBadge}>
                          ⚡ Alta Prioridad
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ ...modalStyles.buttonGroup, justifyContent: 'center' }}> {/* Center the close button */}
              <button
                onClick={() => setShowImportantDatesModal(false)}
                style={{ ...modalStyles.button, ...modalStyles.cancelButton }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal para mostrar todos los eventos */}
      {showAllEventsModal && (
        <div style={modalStyles.overlay} onClick={(e) => e.target === e.currentTarget && setShowAllEventsModal(false)}>
          <div style={modalStyles.content}>
            <h3 style={{ marginTop: 0, color: '#fff', textAlign: 'center', marginBottom: '25px' }}> {/* Adjusted header */}
              Todos los Eventos
            </h3>

            {events.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#aaa', padding: '20px' }}> {/* Lighter grey for empty state */}
                No hay eventos registrados
              </p>
            ) : (
              <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                {events.map(event => (
                  <div key={event.id} style={{
                    border: '1px solid #555', // Darker border
                    borderRadius: '8px', // Slightly more rounded
                    padding: '15px', // More padding
                    marginBottom: '15px', // More margin
                    backgroundColor: '#2a2a4a', // Dark background for cards
                    color: '#eee' // Light text for card content
                  }}>
                    <h4 style={{ margin: '0 0 8px 0', color: '#fff', fontSize: '18px' }}>{event.title}</h4>
                    <p style={{ margin: '0 0 8px 0', color: '#ccc', fontSize: '14px' }}>
                      {formatDate(event.date)} {event.time && `- ${formatTime(event.time)}`}
                    </p>
                    {event.description && (
                      <p style={{ margin: '0 0 12px 0', color: '#ccc', fontSize: '14px' }}>
                        {event.description}
                      </p>
                    )}
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => handleEditFromList(event)}
                        style={{
                          ...modalStyles.button,
                          backgroundColor: '#007bff',
                          color: 'white',
                          padding: '8px 15px', // Adjusted padding
                          fontSize: '13px' // Adjusted font size
                        }}
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDeleteFromList(event)}
                        style={{
                          ...modalStyles.button,
                          ...modalStyles.deleteButton,
                          padding: '8px 15px',
                          fontSize: '13px'
                        }}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div style={{ ...modalStyles.buttonGroup, justifyContent: 'center' }}> {/* Center the close button */}
              <button
                onClick={() => setShowAllEventsModal(false)}
                style={{ ...modalStyles.button, ...modalStyles.cancelButton }}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};