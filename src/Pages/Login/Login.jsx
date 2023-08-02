import React from "react";
import { BsFillCircleFill } from "react-icons/Bs";
import { FaUserAlt } from "react-icons/Fa";
import { MdOutlineEmail } from "react-icons/Md";
import { RiLockPasswordFill } from "react-icons/Ri";
import "../../assets/CSS/Login.css";
import img from "../../assets/Images/Login/login.svg";

const Login = () => {
  return (
    <React.Fragment>
      <section className="banner__login">
        <div className="full__login">
          <i className="circle__icon">
            <BsFillCircleFill />
          </i>
          <div className="content__login">
            <h1>¡Bienvenidos!</h1>
            <img src={img} alt="" />
          </div>
          <i className="circle__icon">
            <BsFillCircleFill />
          </i>
        </div>
        <div className="screen__login">
          <form>
            <h2>Inicio de Sesion</h2>
            <div className="form_login">
              <i className="icons">
                <FaUserAlt />
                <p>Usuario</p>
              </i>
              <input type="text" placeholder="Usuario" />
            </div>
            <div className="form_login">
              <i className="icons">
                <MdOutlineEmail />
                <p>Correo Electronico</p>
              </i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="form_login">
              <i className="icons">
                <RiLockPasswordFill />
                <p>Contraseña</p>
              </i>
              <input type="password" placeholder="Contraseña" />
            </div>
            <p>
              ¿Olvidaste contraseña? <a href="#">Recuperarla aqui</a>
            </p>
            <button className="button__login">Iniciar Sesion</button>
            <p>
              No tienes cuenta <a href="/sign">Ingresar aqui</a>
            </p>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Login;
