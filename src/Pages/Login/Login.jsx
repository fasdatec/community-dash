import React from "react";
import { BsFillCircleFill} from "react-icons/Bs";
import { FaUserAlt, FaEnvelope, FaUnlockAlt  } from "react-icons/Fa";
import "../../assets/css/login.css";
import imgLogin from '../../assets/images/login.svg';
const Login = () => {
  return (
      <section className="login__banner__community">
        <article className="login__full__community">
          <i className="login__icon__community"><BsFillCircleFill /></i>
          <div className="login__content__community">
            <h1>Bienvenidos</h1>
            <img src={imgLogin}  alt="Community" loading="lazy" title="Community" width={100} height={100}/>
          </div>
          <i className="login__icon__community"><BsFillCircleFill /></i>
        </article>
        <form className="login__screen__community">
          <h2>Inicio de Sesion</h2>
            <div className="login__input__community">
              <p><FaUserAlt />Usuario</p>
              <input type="text" placeholder="Usuario" />
            </div>
            <div className="login__input__community">
              <p><FaEnvelope />Correo Electronico</p>
              <input type="email" placeholder="Email" />
            </div>
            <div className="login__input__community">
              <p><FaUnlockAlt />Contraseña</p>
              <input type="password" placeholder="Contraseña" />
            </div>
            <div className="login__tex__community">
              <article className="login__text__community">
                <p> ¿Olvidaste contraseña?</p>
                <a href="#">Recuperarla aqui</a>
              </article>
              <button>Iniciar Sesion</button>
              <article className="login__text__community">
                <p>No tienes cuenta</p>
                <a href="/sign">Ingresar aqui</a>
              </article>
            </div>
        </form>
      </section>
  );
};
export default Login;