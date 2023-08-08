import React from 'react'
import '../../assets/css/recover.css'
const Recover = () => {
  return (
    <section className='contenido'>
      <header className='recover__container__community'>
          <h2>Community Manager</h2>
          <a href="/">Inicio de Sesion</a>
      </header>
          <form className='recover__form__community'>
            <div className='recover__banner__community'>
            <h2>Recupera cuenta</h2><hr />
            <p>Ingresa tu correo electrónico para buscar tu cuenta. </p>
            <input type="text" placeholder='Correo Electronico' />
            <div className='recover__button__community'>
              <a className='recover__cancel__community' href="/">Cancelar</a>
              <a className='recover__login__community' href="#">Continuar</a>
            </div>
            </div>
          </form>
    </section>

  )
}

export default Recover