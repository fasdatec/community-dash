import React from 'react';
import fasdatec from './Containpost.module.scss'; // La importación de tu CSS Module
import PropTypes from 'prop-types'; 

const Containpost = ({ post }) => {
  // console.log("Renderizando Containpost para:", post.title); // Puedes descomentar esto para depurar si el componente se está renderizando

  const imageUrl = post.mediaPath 
    ? `http://localhost:8080/${post.mediaPath.replace(/\\/g, "/")}` 
    : null;

  return (
    <section className={fasdatec.contain__post__card}>
      {imageUrl && (
        <img
          className={fasdatec.contain__post__img__preview}
          src={imageUrl}
          alt={post.title || "Post image"}
        />
      )}
      <div className={fasdatec.post__details}>
        <h3 className={fasdatec.post__title}>{post.title || 'Sin título'}</h3>
        <p className={fasdatec.post__description}>{post.description || 'Sin descripción'}</p>
        {/* Usamos !post.marca?.trim() para verificar si la marca es vacía o solo espacios */}
        {!post.marca || !post.marca.trim() ? null : (
          <p className={fasdatec.post__meta}><strong>Marca:</strong> <span className={fasdatec.post__meta_value}>{post.marca}</span></p>
        )}
        {!post.encabezado || !post.encabezado.trim() ? null : (
          <p className={fasdatec.post__meta}><strong>Encabezado:</strong> <span className={fasdatec.post__meta_value}>{post.encabezado}</span></p>
        )}
        <p className={fasdatec.post__date}>
          <small>Fecha: {post.date ? new Date(post.date).toLocaleString() : 'N/A'}</small>
        </p>
      </div>
    </section>
  );
};

Containpost.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    mediaPath: PropTypes.string,
    marca: PropTypes.string,
    encabezado: PropTypes.string,
    date: PropTypes.string,
  }).isRequired
};

export default Containpost;