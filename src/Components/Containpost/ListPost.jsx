import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import axios from "../../assets/api/axios"; 

const ListPost = ({ socialMedia }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState(null);
  const [editForm, setEditForm] = useState({
    title: '',
    description: '',
    marca: '',
    encabezado: '',
    media: null
  });

  // Obtener posts
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); 
      try {
        let apiUrl = '';

        if (socialMedia && typeof socialMedia === 'string' && socialMedia.trim() !== '') {
          apiUrl = `http://localhost:8080/posts/get/post/social/${socialMedia}`;
        } else {
          apiUrl = `http://localhost:8080/posts/get/post/all`;
        }
        
        const response = await axios.get(apiUrl); 
        
        if (response.data.ok) {
          setPosts(response.data.posts);
        } else {
          setPosts([]); 
        }
      } catch (error) {
        console.error("Error al obtener posts:", error);
        setPosts([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [socialMedia]);

  // Eliminar post
  const handleDelete = async (postId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar esta publicación?')) {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          alert('No estás autenticado');
          return;
        }

        const response = await axios.delete(
          `http://localhost:8080/posts/${postId}`,
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );

        if (response.data.ok) {
          setPosts(posts.filter(post => post._id !== postId));
          alert('✅ Post eliminado correctamente');
        } else {
          alert('❌ No se pudo eliminar el post');
        }
      } catch (error) {
        console.error('Error al eliminar:', error.response?.data || error.message);
        alert(`❌ Error: ${error.response?.data?.message || 'Error al eliminar'}`);
      }
    }
  };

  // Editar post - Abrir modal
  const handleEdit = (post) => {
    setEditingPost(post);
    setEditForm({
      title: post.title,
      description: post.description,
      marca: post.marca || '',
      encabezado: post.encabezado || '',
      media: null
    });
  };

  // Manejar cambio de archivo
  const handleFileChange = (e) => {
    setEditForm({
      ...editForm,
      media: e.target.files[0]
    });
  };

  // Editar post - Enviar cambios
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        alert('No estás autenticado');
        return;
      }

      // Preparar datos para enviar
      let dataToSend;
      let headers = {
        'Authorization': `Bearer ${token}`
      };

      // Si hay un archivo nuevo, usar FormData
      if (editForm.media) {
        const formData = new FormData();
        formData.append('title', editForm.title);
        formData.append('description', editForm.description);
        formData.append('marca', editForm.marca);
        formData.append('encabezado', editForm.encabezado);
        formData.append('media', editForm.media);
        
        dataToSend = formData;
        // No establecer Content-Type manualmente para FormData
      } else {
        // Si no hay archivo, enviar JSON
        dataToSend = {
          title: editForm.title,
          description: editForm.description,
          marca: editForm.marca,
          encabezado: editForm.encabezado
        };
        headers['Content-Type'] = 'application/json';
      }

      const response = await axios.put(
        `http://localhost:8080/posts/${editingPost._id}`,
        dataToSend,
        { headers }
      );

      if (response.data.ok) {
        // Actualizar el post en el estado local
        setPosts(posts.map(post => 
          post._id === editingPost._id ? { ...post, ...response.data.post } : post
        ));
        setEditingPost(null);
        // Resetear el formulario
        setEditForm({
          title: '',
          description: '',
          marca: '',
          encabezado: '',
          media: null
        });
        alert('✅ Post actualizado correctamente');
      } else {
        alert('❌ No se pudo actualizar el post');
      }
    } catch (error) {
      console.error('Error al actualizar:', error.response?.data || error.message);
      alert(`❌ Error: ${error.response?.data?.message || 'Error al actualizar'}`);
    }
  };

  if (loading) return <p style={{ textAlign: 'center', padding: '20px' }}>Cargando publicaciones...</p>;

  if (posts.length === 0) {
    return (
      <p style={{ textAlign: 'center', padding: '20px' }}>
        {socialMedia && typeof socialMedia === 'string' && socialMedia.trim() !== '' 
          ? `No hay publicaciones para la red social: ${socialMedia}.`
          : 'No hay publicaciones disponibles.'}
      </p>
    );
  }

  return (
    <div style={{ 
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
      gap: "20px", 
      padding: "20px", 
      maxWidth: "1200px", 
      margin: "0 auto" 
    }}>
      {posts.map((post) => {
        const isAbsoluteURL = post.mediaPath && /^https?:\/\//i.test(post.mediaPath);
        const imgSrc = isAbsoluteURL
          ? post.mediaPath
          : post.mediaPath
            ? `http://localhost:8080/${post.mediaPath.replace(/\\/g, "/")}`
            : null;

        return (
          <div 
            key={post._id} 
            style={{ 
              padding: "15px", 
              backgroundColor: "#282c34", 
              color: "#f0f0f0", 
              borderRadius: "10px", 
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", 
              display: "flex", 
              flexDirection: "column",
              justifyContent: "space-between", 
              overflow: "hidden",
              position: "relative"
            }}
          >
            {/* Botones de acción */}
            <div style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              display: "flex",
              gap: "8px",
              zIndex: 10
            }}>
              <button
                onClick={() => handleEdit(post)}
                style={{
                  background: "#4CAF50",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  padding: "8px 10px",
                  fontSize: "14px",
                  cursor: "pointer"
                }}
              >
                ✏️
              </button>
              <button
                onClick={() => handleDelete(post._id)}
                style={{
                  background: "#f44336",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  padding: "8px 10px",
                  fontSize: "14px",
                  cursor: "pointer"
                }}
              >
                🗑️
              </button>
            </div>

            <h3 style={{ color: "#61dafb", marginBottom: "10px", wordBreak: "break-word" }}>
              {post.title}
            </h3>
            
            <p style={{ fontSize: "0.95em", lineHeight: "1.4", marginBottom: "10px", wordBreak: "break-word" }}>
              {post.description}
            </p>

            {imgSrc && (
              <img 
                src={imgSrc} 
                alt={post.title} 
                style={{ 
                  maxWidth: "100%", 
                  height: "180px", 
                  borderRadius: "8px", 
                  marginBottom: "10px",
                  objectFit: "cover" 
                }} 
              />
            )}

            {post.marca && (
              <p style={{ fontWeight: "bold", marginTop: "5px", fontSize: "0.85em" }}>
                Marca: <span style={{ fontWeight: "normal" }}>{post.marca}</span>
              </p>
            )}
            
            {post.encabezado && (
              <p style={{ fontWeight: "bold", fontSize: "0.85em" }}>
                Encabezado: <span style={{ fontWeight: "normal" }}>{post.encabezado}</span>
              </p>
            )}
            
            <p style={{ fontSize: "0.8em", color: "#bbb", marginTop: "10px" }}>
              <small>Fecha: {new Date(post.date).toLocaleString()}</small>
            </p>
          </div>
        );
      })}

      {/* Modal de edición */}
      {editingPost && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: '#fff',
            padding: '30px',
            borderRadius: '12px',
            width: '90%',
            maxWidth: '500px'
          }}>
            <h2 style={{ marginBottom: '20px', color: '#333' }}>Editar Publicación</h2>
            
            <form onSubmit={handleEditSubmit}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Título:</label>
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Descripción:</label>
                <textarea
                  value={editForm.description}
                  onChange={(e) => setEditForm({...editForm, description: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    minHeight: '100px'
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Marca:</label>
                <input
                  type="text"
                  value={editForm.marca}
                  onChange={(e) => setEditForm({...editForm, marca: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Encabezado:</label>
                <input
                  type="text"
                  value={editForm.encabezado}
                  onChange={(e) => setEditForm({...editForm, encabezado: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px'
                  }}
                />
              </div>

              {/* Campo para subir imagen */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>
                  Cambiar imagen (opcional):
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ddd',
                    borderRadius: '6px'
                  }}
                />
                {editForm.media && (
                  <p style={{ fontSize: '0.8em', color: '#28a745', marginTop: '5px' }}>
                    Nueva imagen seleccionada: {editForm.media.name}
                  </p>
                )}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  type="button"
                  onClick={() => setEditingPost(null)}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: 'pointer'
                  }}
                >
                  Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

ListPost.propTypes = {
  socialMedia: PropTypes.string 
};

export default ListPost;