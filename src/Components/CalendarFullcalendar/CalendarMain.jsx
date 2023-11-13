import React, {useState} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' //ofrece vistas Month y DayGrid
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import fasdatec from '../Dashboard/dashboard.module.scss';
export default class Calendar extends React.Component {
    customButtons={
        myCustomButton:{
            text: "ejemplo",
            click: function(){
                alert('esta es una prueba del boton')
            }
        }
    }
    render () {
        return (
            
            <>
            <div className={fasdatec.commu__contain__calendar}>
            <FullCalendar
                plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]}
                initialView='dayGridMonth'
                customButtons={{
                    myCustomButton: {
                        text: 'Todos los post',
                        click: function() {
                            alert('prueba')
                        },
                    },
                }}
                locale='es'
                headerToolbar= {
                    {left: "prev,next today",
                    center: "title,myCustomButton",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",}
                  }
                buttonText={
                    {today: "Hoy",
                     month: "Mes",
                     week: "Semana",
                     day: "Día",
                    list: "Lista"}
                }      
                events={[
                    { title: 'Publicacion 1', date: '2023-11-09' },
                    { title: 'Publicacion 2', date: '2023-11-10' }
                ]}
                eventColor={'#378006'}
                />
            </div>
            </>
        )
    }
}