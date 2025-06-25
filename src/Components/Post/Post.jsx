import React, { useEffect, useState } from 'react';
import axios from '../../assets/api/axios'; // usa tu configuración axios
import fasdatec from './post.module.scss';

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await axios.get('/posts/get/post/all'); // endpoint para traer todos los posts
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

    fetchAllPosts();
  }, []);

  if (loading) return <p>Cargando publicaciones...</p>;
  if (posts.length === 0) return <p>No hay publicaciones registradas.</p>;

  return (
    <div className={fasdatec.commu__post}>
      {posts.map((post) => (
        <div key={post._id} className={fasdatec.commu_post_card}>
          <h3>{post.encabezado}</h3>
          <p><strong>Título:</strong> {post.title}</p>
          <p><strong>Descripción:</strong> {post.description}</p>
          <p><strong>Marca:</strong> {post.marca}</p>
          <p><strong>Red social:</strong> {post.socialMedia}</p>
          <p><strong>Estado:</strong> {post.status}</p>
          <p><small>{new Date(post.date).toLocaleString()}</small></p>
          {post.mediaPath && (
            <img
    src={post.mediaPath}
    alt={post.title}
    style={{ width: '300px', borderRadius: '12px', marginTop: '10px' }}
  />
)}
        </div>
      ))}
    </div>
  );
};

export default Post;
