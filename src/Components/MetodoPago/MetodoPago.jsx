import React from "react";
import fasdatec from "../Dashboard/dashboard.module.scss"
import Navbar from "../Navs/NavBarComponent/Navbar";
import Sidebar from "../Navs/SidebarComponent/Sidebar";
import fasdatecOne from "./metodopago.module.scss"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import visa from "../../assets/images/visa.svg"
import master from "../../assets/images/master.svg"
import american from "../../assets/images/american.svg"
import paypal from "../../assets/images/paypal.svg"
const MetodoPago = () => {
    const MySwal = withReactContent(Swal);
    const doneProcess = () => {
        MySwal.fire({
          title: 'Gracias por tu pago',
          showConfirmButton: false,
          allowOutsideClick: false,
          color:'#fff',
          width: '80%',
          padding: '3em',
          background: "rgba(18, 18, 43, 0.92)",
          backdrop: 'rgba(6, 6, 46, 0.877)',
          confirmButtonColor: '#000',
          icon: 'success',
          timer:2500
        })
    }
    return(
        <>
         <section className={fasdatec.commu__section__post}>
        <div className={fasdatec.commu__section__navigation}>
          <Navbar />
        </div>
        <div className={fasdatec.commu__post}>
          <Sidebar />
          <div className={fasdatec.commu__section__create__post}>
            <h1>Método de pago</h1>
            <div className={fasdatecOne.commu__subs__images__resumen}>
                <div className={fasdatecOne.commu__images__cards}>
                    <img src={visa} />
                    <img src={master} />
                    <img src={american} />
                    <img src={paypal} />
                </div>
                <div className={fasdatecOne.commu__resumen}>
                    <p>Resumen del pedido</p>
                    <div className={fasdatecOne.commu__pedido}>
                        <p>
                            ejemplo del resumen del pedido
                        </p>
                    </div>
                </div>
            </div>
            <div className={fasdatecOne.commu__section__form__container}>
              <div >{/*formu*/}
                <div className={fasdatecOne.commu__flexrow__form}>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="numero" className={fasdatecOne.commu__creation__label}>Número de la tarjeta</label>
                    <input type="text" id='numero' className={fasdatecOne.commu__creation__input} placeholder='Número de la tarjeta'/>
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="nombre" className={fasdatecOne.commu__creation__label}>Nombre</label>
                    <input type="text" id='nombre' className={fasdatecOne.commu__creation__input} placeholder='Nombre'/>
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="fecha" className={fasdatecOne.commu__creation__label}>Fecha de expiración</label>
                    <input type="text" id='fecha' className={fasdatecOne.commu__creation__input} placeholder='Fecha de expiración'/>
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="cvc" className={fasdatecOne.commu__creation__label}>CVC</label>
                    <input type="text" id='cvc' className={fasdatecOne.commu__creation__input} placeholder='CVC'/>
                  </div>
                </div>
                <div className={fasdatecOne.commu__flexbtn}>
                    <input type="button" onClick={doneProcess} className={fasdatecOne.commu__btn__send} value="Realizar pago" />
                </div>
                <div className={fasdatecOne.commu__term__subscriptions}>
                    <p>
                        Te cobraremos USD 95.40/año (más los impuestos correspondientes) cuando hagas clic en &quot;Pagar ahora&quot;. Tu suscripción paga se renovará automáticamente hasta que la canceles. Puedes cancelarla en cualquier momento desde Configuración de cuenta o comunicándote con nosotros. Con tu clic en &quot;Pagar ahora&quot;, aceptas las Condiciones de servicio y la Política de privacidad.
                    </p>
                </div>
              </div>{/*formu*/}
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
export default MetodoPago