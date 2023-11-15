import React from 'react'
import fasdatec from './postsocialmedia.module.scss'
import { ButtonYellowTransparentRound } from "../Buttons/Buttons";

const PostSocialMediabyClient = ({titleSocialMedia, imglogo}) => {
    return (
        <>
          <div className={fasdatec.commu__card__social__media}>
            <div className={fasdatec.commu__img__sm}>
              <img className={fasdatec.commu__img__logo__sm} src={imglogo}/>
              <p>{titleSocialMedia}</p>
            </div>
            <div className={fasdatec.commu__button__card}>
              <ButtonYellowTransparentRound titleButton='Crear Post' direction='/Create/Client/id/'/>
            </div>
          </div>
        </>
    )
}

export default PostSocialMediabyClient