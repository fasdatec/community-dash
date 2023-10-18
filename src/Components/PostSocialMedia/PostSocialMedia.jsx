import React from "react";
import fasdatec from './postsocialmedia.module.scss'
import { ButtonYellowTransparent } from "../Buttons/Buttons";


const PostSocialMedia = ({titleSocialMedia}) => {
  return (
    <>
    <div className={fasdatec.commu__card__social__media}>
      <div className={fasdatec.commu__img__sm}>
        <img />
        <p>{titleSocialMedia}</p>
      </div>
      <div className={fasdatec.commu__button__card}>
        <ButtonYellowTransparent titleButton='Crear'/>
      </div>
    </div>
    </>
  )
}
export default PostSocialMedia

