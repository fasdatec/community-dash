import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'; // <-- Agrega esta línea
import axios from "../../assets/api/axios";

const ListPost = ({ socialMedia }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`/posts/get/post/social/${socialMedia}`);
        if(response.data.ok) {
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

  if (loading) return <p>Cargando publicaciones...</p>;

  if (posts.length === 0)
    return <p>No hay publicaciones para esta red social.</p>;

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id} style={{ marginBottom: "20px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          {post.mediaPath && (
            <img 
              src={`http://localhost:8080/${post.mediaPath.replace(/\\/g, "/")}`} 
              alt={post.title} 
              style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }} 
            />
          )}
          <p><strong>Marca:</strong> {post.marca}</p>
          <p><strong>Encabezado:</strong> {post.encabezado}</p>
          <p><small>Fecha: {new Date(post.date).toLocaleString()}</small></p>
        </div>
      ))}
    </div>
  );
};

// ✨ Esto evita la línea roja
ListPost.propTypes = {
  socialMedia: PropTypes.string.isRequired
};

export default ListPost;
