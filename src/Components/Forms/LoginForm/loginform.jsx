import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Agregado
import routes from "../../../assets/helpers/routes";
import useAuth from "../../auth/useAuth";
import fasdatec from "./login.module.scss";
import imgLogin from "../../../assets/images/login.svg";

const LoginForm = () => {
  const { login } = useAuth();
  const navigate = useNavigate(); // ✅ Inicializado
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: ""
  });

  const handleInputChange = (e) => {
    e.target.name === "username"
      ? setLoginInfo({
          ...loginInfo,
          username: e.target.value.replace(/[^a-zA-Z 0-9]/g, "")
        })
      : setLoginInfo({
          ...loginInfo,
          [e.target.name]: e.target.value.replace(/[^a-zA-Z0-9@#]/g, "")
        });
  };

  const handleSubmit = async (form) => {
    form.preventDefault();
    const success = await login(loginInfo); // Esperamos respuesta
    if (success) {
      navigate("/subscriptions"); // ✅ Redirección al login exitoso
    }
  };

  return (
    <>
      <section className={fasdatec.commu__container__form}>
        <article className={fasdatec.commu__form__wave}>
          <div className={fasdatec.commu__img__form}>
            <h1 className={fasdatec.commu__title__head}>¡Bienvenido!</h1>
            <img
              src={imgLogin}
              className={fasdatec.img__commu}
              loading="lazy"
              alt="Comunity Manager de FasdaTec"
              title="Comunity Manager de FasdaTec"
            />
          </div>
        </article>
        <article className={fasdatec.commu__form__steps}>
          <h2 className={fasdatec.commu__title__head__form}>Inicio de Sesión al ComuFasda</h2>
          <form onSubmit={handleSubmit}>
            <div className={fasdatec.commu__form__group}>
              <div className={fasdatec.commu__form__desing}>
                {/* SVG Icon */}
                <label htmlFor="user" className={fasdatec.commu__label__form}>Usuario</label>
              </div>
              <input
                type="text"
                className={fasdatec.commu__desing__input}
                name="username"
                onChange={handleInputChange}
                value={loginInfo.username}
                id="user"
                placeholder="Ingresa tu Usuario o Correo"
              />
            </div>

            <div className={fasdatec.commu__form__group}>
              <div className={fasdatec.commu__form__desing}>
                {/* SVG Icon */}
                <label htmlFor="pass" className={fasdatec.commu__label__form}>Password</label>
              </div>
              <input
                type="password"
                className={fasdatec.commu__desing__input}
                name="password"
                onChange={handleInputChange}
                value={loginInfo.password}
                id="pass"
                placeholder="Ingresa tu Contraseña"
              />
            </div>

            <div className={`${fasdatec.commu__form__group} ${fasdatec.commu__bottom}`}>
              <span className={fasdatec.commu__span__text}>
                ¿No tienes cuenta?
                <a href={routes.registros.home} className={fasdatec.commu__link__text}> Ingresa aquí</a>
              </span>
            </div>

            <button className={fasdatec.commu__btn} type="submit">Ingresar</button>

            <div className={`${fasdatec.commu__form__group} ${fasdatec.commu__center} ${fasdatec.commu__top}`}>
              <span className={fasdatec.commu__span__text}>
                ¿Olvidaste tu Contraseña?
                <a href={routes.recuperar} className={fasdatec.commu__link__text}> Da un clic aquí</a>
              </span>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default LoginForm;
