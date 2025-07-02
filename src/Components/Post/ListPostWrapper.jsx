// src/Components/Post/ListPostWrapper.jsx
import React from "react";
import { useParams } from "react-router-dom";
import ListPost from "../ContainPost/ListPost";

const ListPostWrapper = () => {
  const { social } = useParams(); 

  
  const defaultSocialMedia = "Facebook"; 

  // Usa el valor de 'social' si existe y no está vacío, de lo contrario, usa el valor por defecto
  const socialMediaToDisplay = social && social.trim() !== '' ? social : defaultSocialMedia;


  return <ListPost socialMedia={socialMediaToDisplay} />;
};

export default ListPostWrapper;