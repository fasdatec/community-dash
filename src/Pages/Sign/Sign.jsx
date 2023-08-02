import React from "react";
import { BsFillCircleFill } from "react-icons/Bs";
import { FaUserAlt } from "react-icons/Fa";
import { MdOutlineEmail } from "react-icons/Md";
import { RiLockPasswordFill } from "react-icons/Ri";
import "../../assets/Css/sign.css";
import img from "../../assets/Images/Login/login.svg";

const Register = () => {
  return (
    <React.Fragment>
      <section className="banner__sign">
        <div className="full__sign">
          <i className="circle__icon__sign">
            <BsFillCircleFill />
          </i>
          <div className="content__sign">
            <h1>¡Inicia una Nueva Experiencia!</h1>
            <img src={img} alt="" />
          </div>
          <i className="circle__icon__sign">
            <BsFillCircleFill />
          </i>
        </div>
        <div className="screen__sign">
          <form>
            <h2>Crear Cuenta</h2>
            <div className="form_sign">
              <i className="icons">
                <FaUserAlt />
                <p>Usuario</p>
              </i>
              <input type="text" placeholder="Usuario" />
            </div>
            <div className="form_sign">
              <i className="icons">
                <MdOutlineEmail />
                <p>Correo Electronico</p>
              </i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="form_sign">
              <i className="icons">
                <RiLockPasswordFill />
                <p>Contraseña</p>
              </i>
              <input type="password" placeholder="Contraseña" />
            </div>
            <div className="form_sign">
              <i className="icons">
                <RiLockPasswordFill />
                <p>Confirmar Contraseña</p>
              </i>
              <input type="password" placeholder="Confirmar Contraseña" />
            </div>
            <button className="button__sign">Crear cuenta</button>
            <p>
              ¿Ya tienes Cuenta? <a href="/">Iniciar Sesion</a>
            </p>
          </form>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Register;
