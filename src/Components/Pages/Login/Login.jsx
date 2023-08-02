import React from "react";
import { BsFillCircleFill } from "react-icons/Bs";
import { FaUserAlt } from "react-icons/Fa";
import { MdOutlineEmail } from "react-icons/Md";
import { RiLockPasswordFill } from "react-icons/Ri";
import "../../../assets/css/login.css";
import img from "../../../assets/Images/Login/login.svg";

const Login = () => {
  return (
      <section className="login__banner__community">
        <article className="login__full__community">
          <i className="login__icon__community"><BsFillCircleFill /></i>
          <div className="login__content__community">
            <h1>¡Bienvenidos!</h1>
            <img src={img} loading="lazy" alt="Login" title="Login Community" width={100} height={100}/>
          </div>
          <i className="login__icon__community"><BsFillCircleFill /></i>
        </article>
          <form className="login__screen__community">
            <h2>Inicio de Sesion</h2>
              <div className="login__form__community">
                <i><FaUserAlt /><p>Usuario</p></i>
                <input type="text" placeholder="Usuario" />
              </div>
              <div className="login__form__community">
                <i><MdOutlineEmail /><p>Correo Electronico</p></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="login__form__community">
                <i><RiLockPasswordFill /><p>Contraseña</p></i>
                <input type="password" placeholder="Contraseña" />
              </div>
              <section className="login__text__community">
                <p>
                  ¿Olvidaste contraseña? <a href="#">Recuperarla aqui</a>
                </p>
                <button className="login__button__community">Iniciar Sesion</button>
                <p>
                  No tienes cuenta <a href="/sign">Ingresar aqui</a>
                </p>
              </section>
          </form>
      </section>
  );
};
export default Login;