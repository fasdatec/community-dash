import React, { useState, useEffect } from "react"
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


function MetodoPago(){
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
      
          </div>
        </div>
      </section>
        </>
    )
}
export default MetodoPago