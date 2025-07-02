// src/Components/ContainPost/ListPost.jsx
import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'; 
import axios from "../../assets/api/axios"; 

const ListPost = ({ socialMedia }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true); 
      try {
        let apiUrl = '';

        // Decide qué API llamar basado en si socialMedia tiene un valor válido
        if (socialMedia && typeof socialMedia === 'string' && socialMedia.trim() !== '') {
          // Si socialMedia tiene un valor (ej. "Facebook"), pedimos posts de esa red social
          apiUrl = `http://localhost:8080/posts/get/post/social/${socialMedia}`;
        } else {
          // Si socialMedia es undefined, null, o una cadena vacía, pedimos TODOS los posts
          apiUrl = `http://localhost:8080/posts/get/all`;
        }
        
        // --- CONSOLE.LOG PARA DEPURAR LA URL DE LA API ---
        console.log("DEBUG: Llamando a la API con URL:", apiUrl);

        const response = await axios.get(apiUrl); 
        
        if (response.data.ok) {
          setPosts(response.data.posts);
          // --- CONSOLE.LOG PARA VER LOS POSTS RECIBIDOS ---
          console.log("DEBUG: Posts recibidos:", response.data.posts);
        } else {
          setPosts([]); 
          console.warn("La respuesta del servidor indicó 'ok: false'. No se pudieron cargar los posts.");
        }
      } catch (error) {
        console.error("❌ Error al obtener posts:", error); // Línea 35, punto de origen del error

        // --- CONSOLE.LOGS EXTENDIDOS PARA DETALLES DEL AxiosError ---
        if (error.response) {
          // El servidor respondió con un código de estado fuera del rango 2xx
          console.error("DEBUG: Detalles del Error (Respuesta del Servidor):");
          console.error("  Data:", error.response.data);
          console.error("  Estado (Status):", error.response.status);
          console.error("  Cabeceras (Headers):", error.response.headers);
        } else if (error.request) {
          // La solicitud fue hecha pero no se recibió respuesta (ej. red caída, CORS, backend no corre)
          console.error("DEBUG: Detalles del Error (Solicitud sin Respuesta):");
          console.error("  Mensaje:", "No se recibió respuesta del servidor. Posibles causas: backend no corre, problema de red, CORS, firewall.");
          console.error("  Objeto Request:", error.request);
        } else {
          // Algo más causó el error al configurar la solicitud (menos común)
          console.error("DEBUG: Detalles del Error (Configuración de la Solicitud):");
          console.error("  Mensaje:", error.message);
        }
        // --- FIN CONSOLE.LOGS EXTENDIDOS ---

        setPosts([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [socialMedia]); // La dependencia sigue siendo socialMedia para re-fetch si el filtro cambia

  if (loading) return <p>Cargando publicaciones...</p>;

  // Mensaje más específico basado en si se está filtrando o no
  if (posts.length === 0) {
    if (socialMedia && typeof socialMedia === 'string' && socialMedia.trim() !== '') {
      return <p>No hay publicaciones para la red social: {socialMedia}.</p>;
    } else {
      return <p>No hay publicaciones disponibles.</p>; // Mensaje cuando no se filtra
    }
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
      {posts.map((post) => (
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
            overflow: "hidden" 
          }}
        >
          <h3 style={{ color: "#61dafb", marginBottom: "10px", wordBreak: "break-word" }}>{post.title}</h3>
          <p style={{ fontSize: "0.95em", lineHeight: "1.4", marginBottom: "10px", wordBreak: "break-word" }}>{post.description}</p>
          {post.mediaPath && (
            // --- CONSOLE.LOG PARA DEPURAR LA URL DE LA IMAGEN ---
            // Asegúrate de que esta URL es la que tu servidor de backend espera para servir archivos estáticos
            console.log("DEBUG: URL de imagen construida:", `http://localhost:8080/${post.mediaPath.replace(/\\/g, "/")}`),
            <img 
              src={`http://localhost:8080/${post.mediaPath.replace(/\\/g, "/")}`} 
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
          {!post.marca || !post.marca.trim() ? null : (
            <p style={{ fontWeight: "bold", marginTop: "5px", fontSize: "0.85em" }}>Marca: <span style={{ fontWeight: "normal" }}>{post.marca}</span></p>
          )}
          {!post.encabezado || !post.encabezado.trim() ? null : (
            <p style={{ fontWeight: "bold", fontSize: "0.85em" }}>Encabezado: <span style={{ fontWeight: "normal" }}>{post.encabezado}</span></p>
          )}
          <p style={{ fontSize: "0.8em", color: "#bbb", marginTop: "10px" }}>
            <small>Fecha: {new Date(post.date).toLocaleString()}</small>
          </p>
        </div>
      ))}
    </div>
  );
};

ListPost.propTypes = {
  socialMedia: PropTypes.string 
};

export default ListPost;