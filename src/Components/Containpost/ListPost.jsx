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

        if (socialMedia && typeof socialMedia === 'string' && socialMedia.trim() !== '') {
          apiUrl = `http://localhost:8080/posts/get/post/social/${socialMedia}`;
        } else {
          apiUrl = `http://localhost:8080/posts/get/all`;
        }
        
        console.log("DEBUG: Llamando a la API con URL:", apiUrl);

        const response = await axios.get(apiUrl); 
        
        if (response.data.ok) {
          setPosts(response.data.posts);
          console.log("DEBUG: Posts recibidos:", response.data.posts);
        } else {
          setPosts([]); 
          console.warn("La respuesta del servidor indicó 'ok: false'. No se pudieron cargar los posts.");
        }
      } catch (error) {
        console.error("❌ Error al obtener posts:", error);

        if (error.response) {
          console.error("DEBUG: Detalles del Error (Respuesta del Servidor):", error.response.data);
          console.error("Estado:", error.response.status);
          console.error("Headers:", error.response.headers);
        } else if (error.request) {
          console.error("DEBUG: No se recibió respuesta del servidor.", error.request);
        } else {
          console.error("DEBUG: Error en configuración de la solicitud:", error.message);
        }

        setPosts([]); 
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [socialMedia]);

  if (loading) return <p>Cargando publicaciones...</p>;

  if (posts.length === 0) {
    if (socialMedia && typeof socialMedia === 'string' && socialMedia.trim() !== '') {
      return <p>No hay publicaciones para la red social: {socialMedia}.</p>;
    } else {
      return <p>No hay publicaciones disponibles.</p>;
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
      {posts.map((post) => {
        // DEBUG: mostrar mediaPath en consola
        console.log("DEBUG: mediaPath:", post.mediaPath);

        // Detectar si mediaPath es URL absoluta (ej. empieza con http o https)
        const isAbsoluteURL = post.mediaPath && /^https?:\/\//i.test(post.mediaPath);

        // Construir src de la imagen
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
              overflow: "hidden" 
            }}
          >
            <h3 style={{ color: "#61dafb", marginBottom: "10px", wordBreak: "break-word" }}>{post.title}</h3>
            <p style={{ fontSize: "0.95em", lineHeight: "1.4", marginBottom: "10px", wordBreak: "break-word" }}>{post.description}</p>

            {/* Mostrar mediaPath para depuración */}
            <p style={{ fontSize: "0.7em", color: "#888", marginBottom: "8px" }}>MediaPath: {post.mediaPath || "N/A"}</p>

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

            {!post.marca || !post.marca.trim() ? null : (
              <p style={{ fontWeight: "bold", marginTop: "5px", fontSize: "0.85em" }}>
                Marca: <span style={{ fontWeight: "normal" }}>{post.marca}</span>
              </p>
            )}
            {!post.encabezado || !post.encabezado.trim() ? null : (
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
    </div>
  );
};

ListPost.propTypes = {
  socialMedia: PropTypes.string 
};

export default ListPost;
