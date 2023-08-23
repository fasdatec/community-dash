import React from 'react';
import '../../../assets/css/forms.css';
import imgLogin from '../../../assets/images/login.svg';

const loginform = () => {
  return (
    <>
      <section className="commu__container__form">
        <article className="commu__form__wave">
            <div className="commu__img__form">
                <h1>¡Bienvenido!</h1>
                <img src={imgLogin} loading="lazy" alt="Comunity Manager de FasdaTec" title="Comunity Manager de FasdaTec" />
            </div>
        </article>
        <article className="commu__form__steps">
          <h2>Inicio de Sesión al ComuFasda</h2>
            <form className='commu__form__general'>
                <div className="commu__form__group">
                    <div className="commu__form__desing">
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_17_253)">
                                <rect width="60" height="60" rx="30" fill="#2f2e41"/>
                                <rect x="18" y="10" width="24" height="24" rx="12" fill="#FFCB14"/>
                                <rect x="-15" y="40" width="90" height="90" rx="45" fill="#FFCB14"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_17_253">
                                <rect width="60" height="60" rx="30" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <label htmlFor="user" className='commu__label__form'>Usuario</label>
                    </div>
                    <input type="text" className='commu__desing__input' name="" id="user" placeholder='Ingresa tu Usuario o Correo' />
                </div>
                <div className="commu__form__group">
                    <div className="commu__form__desing">
                        <svg width="55" height="43" viewBox="0 0 55 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.4998 30.4582C28.7154 30.4582 29.8812 30.0806 30.7407 29.4086C31.6003 28.7366 32.0832 27.8252 32.0832 26.8748C32.0832 25.9245 31.6003 25.013 30.7407 24.341C29.8812 23.669 28.7154 23.2915 27.4998 23.2915C26.2843 23.2915 25.1185 23.669 24.2589 24.341C23.3994 25.013 22.9165 25.9245 22.9165 26.8748C22.9165 27.8252 23.3994 28.7366 24.2589 29.4086C25.1185 30.0806 26.2843 30.4582 27.4998 30.4582ZM41.2498 14.3332C42.4654 14.3332 43.6312 14.7107 44.4907 15.3827C45.3503 16.0547 45.8332 16.9661 45.8332 17.9165V35.8332C45.8332 36.7835 45.3503 37.695 44.4907 38.367C43.6312 39.039 42.4654 39.4165 41.2498 39.4165H13.7498C12.5343 39.4165 11.3685 39.039 10.5089 38.367C9.64939 37.695 9.1665 36.7835 9.1665 35.8332V17.9165C9.1665 16.9661 9.64939 16.0547 10.5089 15.3827C11.3685 14.7107 12.5343 14.3332 13.7498 14.3332H16.0415V10.7498C16.0415 8.37394 17.2487 6.09535 19.3976 4.41534C21.5464 2.73533 24.4609 1.7915 27.4998 1.7915C29.0046 1.7915 30.4946 2.02322 31.8848 2.47342C33.2749 2.92361 34.5381 3.58348 35.6021 4.41534C36.6661 5.2472 37.5101 6.23476 38.086 7.32163C38.6618 8.40851 38.9582 9.57341 38.9582 10.7498V14.3332H41.2498ZM27.4998 5.37484C25.6765 5.37484 23.9278 5.94113 22.6385 6.94914C21.3492 7.95715 20.6248 9.3243 20.6248 10.7498V14.3332H34.3748V10.7498C34.3748 9.3243 33.6505 7.95715 32.3612 6.94914C31.0719 5.94113 29.3232 5.37484 27.4998 5.37484Z" fill="#FFD233"/>
                        </svg>
                        <label htmlFor="pass" className='commu__label__form'>Password</label>
                    </div>
                    <input type="text" className='commu__desing__input' name="" id="pass" placeholder='Ingresa tu Contraseña' />
                </div>
                <div className="commu__form__group commu__bottom">
                    <span className='commu__span__text'>¿No tienes cuenta? 
                    <a href="/Registro" className='commu__link__text'> Ingresa aqui</a></span>
                </div>
                {/**<button className='commu__btn'>Ingresar</button> */}
                <a href="/Dashboard" className='commu__btn'>Ingresar</a>
                <div className="commu__form__group commu__center commu__top">
                    <span className='commu__span__text'>¿Olvidaste tu Contraseña?
                    <a href="/Recuperar" className='commu__link__text'> Da un clic aqui</a></span>
                </div>
            </form>
        </article>
      </section>
    </>
  );
}
export default loginform