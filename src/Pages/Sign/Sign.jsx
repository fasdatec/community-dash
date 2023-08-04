import React from "react";
import { BsFillCircleFill} from "react-icons/Bs";
import { FaUserAlt, FaEnvelope, FaUnlockAlt  } from "react-icons/Fa";
import "../../assets/css/sign.css";
import imgSing from '../../assets/images/sign.svg';

const Sign = () => {
  return (
      <section className="sign__banner__community">
        <article className="sign__full__community">
          <i className="sign__icon__community"><BsFillCircleFill /></i>
          <div className="sign__content__community">
            <h1>Inicia una Nueva Experiencia</h1>
            <img src={imgSing} alt="Community" loading="lazy" title="Community" width={100} height={100}/>
          </div>
          <i className="sign__icon__community"><BsFillCircleFill /></i>
        </article>
          <form className="sign__screen__community">
            <h2>Crear Cuenta</h2>
            <div className="sign__form__community">
              <p><FaUserAlt />Usuario</p>
              <input type="text" placeholder="Usuario" />
            </div>
            <div className="sign__form__community">
              <p><FaEnvelope />Correo Electronico</p>
              <input type="email" placeholder="Email" />
            </div>
            <div className="sign__form__community">
              <p><FaUnlockAlt />Contraseña</p>
              <input type="password" placeholder="Contraseña" />
            </div>
            <div className="sign__form__community">
              <p><FaUnlockAlt />Confirmar Contraseña</p>
              <input type="password" placeholder="Confirmar Contraseña" />
            </div>
            <div className="sign__container__community">
              <button>Crear cuenta</button>
              <p>¿Ya tienes Cuenta? <a href="/">Iniciar Sesion</a></p>
            </div>
          </form>
      </section>
  );
};

export default Sign;