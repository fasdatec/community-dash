import React from "react";
import { BsFillCircleFill } from "react-icons/Bs";
import { FaUserAlt } from "react-icons/Fa";
import { MdOutlineEmail } from "react-icons/Md";
import { RiLockPasswordFill } from "react-icons/Ri";
import "../../../assets/css/sign.css";
import imag from "../../../assets/Images/Sign/sign.svg";

const Register = () => {
  return (
      <section className="sign__banner__community">
        <article className="sign__full__community">
          <i className="sign__icon__community"><BsFillCircleFill /></i>
          <div className="sign__content__community">
            <h1>¡Inicia una Nueva Experiencia!</h1>
            <img src={imag} loading="lazy" alt="Sign" title="Sign Community" width={100} height={100}/>
          </div>
          <i className="sign__icon__community"><BsFillCircleFill /></i>
        </article>
          <form className="sign__screen__community">
            <h2>Crear Cuenta</h2>
            <div className="sign__form__community">
              <i><FaUserAlt /><p>Usuario</p></i>
              <input type="text" placeholder="Usuario" />
            </div>
            <div className="sign__form__community">
              <i><MdOutlineEmail /><p>Correo Electronico</p></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="sign__form__community">
              <i><RiLockPasswordFill /><p>Contraseña</p></i>
              <input type="password" placeholder="Contraseña" />
            </div>
            <div className="sign__form__community">
              <i><RiLockPasswordFill /><p>Confirmar Contraseña</p></i>
              <input type="password" placeholder="Confirmar Contraseña" />
            </div>
            <section className="sign__container__community">
              <button className="sign__button__community">Crear cuenta</button>
              <p>¿Ya tienes Cuenta? <a href="/">Iniciar Sesion</a></p>
            </section>
          </form>
      </section>
  );
};

export default Register;
