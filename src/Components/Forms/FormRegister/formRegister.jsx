import React from 'react'
import '../../../assets/css/forms.css';
import imgRegister from '../../../assets/images/register.svg';
const formRegister = () => {
  return (
    <>
        <section className="commu__container__form">
            <article className="commu__form__wave">
                <div className="commu__img__register">
                    <h1>¡Experiencia Unica!</h1>
                    <img src={imgRegister} loading="lazy" alt="Comunity Manager de FasdaTec" title="Comunity Manager de FasdaTec" />
                </div>
            </article>
            <article className="commu__form__steps">
                <h2>Crear Cuenta para el ComuFasda</h2>
                <form className='commu__form__general'>
                    <div className="commu__form__group">
                        <div className="commu__form__desing">
                            <svg width="35" height="35" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_17_253)">
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
                        <input type="text" className='commu__desing__input' name="" id="user" placeholder='Ingresa tu Usuario de Acceso' />
                    </div>
                    <div className="commu__form__group">
                        <div className="commu__form__desing">
                        <svg width="35" height="35" viewBox="0 0 55 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_17_288" fill="white">
                                <path d="M50.4163 12.2498C50.4163 10.004 48.3538 8.1665 45.833 8.1665H9.16634C6.64551 8.1665 4.58301 10.004 4.58301 12.2498V36.7498C4.58301 38.9957 6.64551 40.8332 9.16634 40.8332H45.833C48.3538 40.8332 50.4163 38.9957 50.4163 36.7498V12.2498ZM45.833 12.2498L27.4997 22.4378L9.16634 12.2498H45.833ZM45.833 36.7498H9.16634V16.3332L27.4997 26.5415L45.833 16.3332V36.7498Z"/>
                            </mask>
                            <path d="M50.4163 12.2498C50.4163 10.004 48.3538 8.1665 45.833 8.1665H9.16634C6.64551 8.1665 4.58301 10.004 4.58301 12.2498V36.7498C4.58301 38.9957 6.64551 40.8332 9.16634 40.8332H45.833C48.3538 40.8332 50.4163 38.9957 50.4163 36.7498V12.2498ZM45.833 12.2498L27.4997 22.4378L9.16634 12.2498H45.833ZM45.833 36.7498H9.16634V16.3332L27.4997 26.5415L45.833 16.3332V36.7498Z" fill="#D3A000"/>
                            <path d="M45.833 12.2498L78.8635 71.6888L308.192 -55.7502H45.833V12.2498ZM27.4997 22.4378L-5.53082 81.8767L27.4997 100.232L60.5302 81.8767L27.4997 22.4378ZM9.16634 12.2498V-55.7502H-253.193L-23.8641 71.6888L9.16634 12.2498ZM45.833 36.7498V104.75H113.833V36.7498H45.833ZM9.16634 36.7498H-58.8337V104.75H9.16634V36.7498ZM9.16634 16.3332L42.2474 -43.0776L-58.8337 -99.3614V16.3332H9.16634ZM27.4997 26.5415L-5.58136 85.9523L27.4997 104.372L60.5807 85.9523L27.4997 26.5415ZM45.833 16.3332H113.833V-99.3614L12.752 -43.0776L45.833 16.3332ZM118.416 12.2498C118.416 -34.7236 78.3112 -59.8335 45.833 -59.8335V76.1665C18.3965 76.1665 -17.5837 54.7316 -17.5837 12.2498H118.416ZM45.833 -59.8335H9.16634V76.1665H45.833V-59.8335ZM9.16634 -59.8335C-23.3119 -59.8335 -63.417 -34.7236 -63.417 12.2498H72.583C72.583 54.7316 36.6029 76.1665 9.16634 76.1665V-59.8335ZM-63.417 12.2498V36.7498H72.583V12.2498H-63.417ZM-63.417 36.7498C-63.417 83.7233 -23.3119 108.833 9.16634 108.833V-27.1668C36.6029 -27.1668 72.583 -5.73197 72.583 36.7498H-63.417ZM9.16634 108.833H45.833V-27.1668H9.16634V108.833ZM45.833 108.833C78.3112 108.833 118.416 83.7233 118.416 36.7498H-17.5837C-17.5837 -5.73197 18.3965 -27.1668 45.833 -27.1668V108.833ZM118.416 36.7498V12.2498H-17.5837V36.7498H118.416ZM12.8025 -47.1891L-5.53082 -37.0012L60.5302 81.8767L78.8635 71.6888L12.8025 -47.1891ZM60.5302 -37.0012L42.1968 -47.1891L-23.8641 71.6888L-5.53082 81.8767L60.5302 -37.0012ZM9.16634 80.2498H45.833V-55.7502H9.16634V80.2498ZM45.833 -31.2502H9.16634V104.75H45.833V-31.2502ZM77.1663 36.7498V16.3332H-58.8337V36.7498H77.1663ZM-23.9147 75.744L-5.58136 85.9523L60.5807 -32.8693L42.2474 -43.0776L-23.9147 75.744ZM60.5807 85.9523L78.914 75.744L12.752 -43.0776L-5.58136 -32.8693L60.5807 85.9523ZM-22.167 16.3332V36.7498H113.833V16.3332H-22.167Z" fill="#FFD233" mask="url(#path-1-inside-1_17_288)"/>
                        </svg>
                            <label htmlFor="mail" className='commu__label__form'>Correo Electronico</label>
                        </div>
                        <input type="text" className='commu__desing__input' name="" id="mail" placeholder='Ingresa tu Correo' />
                    </div>
                    <div className="commu__form__group">
                        <div className="commu__form__desing">
                            <svg width="35" height="35" viewBox="0 0 55 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.4998 30.4582C28.7154 30.4582 29.8812 30.0806 30.7407 29.4086C31.6003 28.7366 32.0832 27.8252 32.0832 26.8748C32.0832 25.9245 31.6003 25.013 30.7407 24.341C29.8812 23.669 28.7154 23.2915 27.4998 23.2915C26.2843 23.2915 25.1185 23.669 24.2589 24.341C23.3994 25.013 22.9165 25.9245 22.9165 26.8748C22.9165 27.8252 23.3994 28.7366 24.2589 29.4086C25.1185 30.0806 26.2843 30.4582 27.4998 30.4582ZM41.2498 14.3332C42.4654 14.3332 43.6312 14.7107 44.4907 15.3827C45.3503 16.0547 45.8332 16.9661 45.8332 17.9165V35.8332C45.8332 36.7835 45.3503 37.695 44.4907 38.367C43.6312 39.039 42.4654 39.4165 41.2498 39.4165H13.7498C12.5343 39.4165 11.3685 39.039 10.5089 38.367C9.64939 37.695 9.1665 36.7835 9.1665 35.8332V17.9165C9.1665 16.9661 9.64939 16.0547 10.5089 15.3827C11.3685 14.7107 12.5343 14.3332 13.7498 14.3332H16.0415V10.7498C16.0415 8.37394 17.2487 6.09535 19.3976 4.41534C21.5464 2.73533 24.4609 1.7915 27.4998 1.7915C29.0046 1.7915 30.4946 2.02322 31.8848 2.47342C33.2749 2.92361 34.5381 3.58348 35.6021 4.41534C36.6661 5.2472 37.5101 6.23476 38.086 7.32163C38.6618 8.40851 38.9582 9.57341 38.9582 10.7498V14.3332H41.2498ZM27.4998 5.37484C25.6765 5.37484 23.9278 5.94113 22.6385 6.94914C21.3492 7.95715 20.6248 9.3243 20.6248 10.7498V14.3332H34.3748V10.7498C34.3748 9.3243 33.6505 7.95715 32.3612 6.94914C31.0719 5.94113 29.3232 5.37484 27.4998 5.37484Z" fill="#FFD233"/>
                            </svg>
                            <label htmlFor="pass" className='commu__label__form'>Password</label>
                        </div>
                        <input type="text" className='commu__desing__input' name="" id="pass" placeholder='Ingresa tu Contraseña' />
                    </div>
                    <div className="commu__form__group commu__bottom">
                        <span className='commu__span__text'>¿Ya tienes una Cuenta? 
                        <a href="/" className='commu__link__text'> Da un clic aqui</a></span>
                    </div>
                    <button className='commu__btn'>Registrar</button>
                </form>
            </article>
        </section>
    </>
  )
}

export default formRegister