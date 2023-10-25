import React from "react";
import Sidebar from "../Navs/SidebarComponent/Sidebar";
import Navbar from "../Navs/NavBarComponent/Navbar";
import fasdatec from '../Dashboard/dashboard.module.scss'
import CardSubs from "./CardSubs";
 
const PlansSubs = () =>{
    return (
        <>
        <section className={fasdatec.commu__section__post}>
            <div  className={fasdatec.commu__section__navigation}>
                <Navbar />
            </div>
            <div className={fasdatec.commu__post}>
                <Sidebar />
                <div className={fasdatec.commu__section__subscriptions}>
                    <h1>Suscripciones de Community</h1>
                    <div className={fasdatec.commu__subscriptions__contain}>
                        <CardSubs titlePlan='Basic' 
                        pricePlan='$9.00 USD'
                        describePlan='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
                        advantagePlan='ejemplo 1' />
                        <CardSubs titlePlan='Basic' 
                        pricePlan='$9.00 USD'
                        describePlan='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
                        advantagePlan='ejemplo 1' />
                        <CardSubs titlePlan='Basic' 
                        pricePlan='$9.00 USD'
                        describePlan='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
                        advantagePlan='ejemplo 1' />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default PlansSubs