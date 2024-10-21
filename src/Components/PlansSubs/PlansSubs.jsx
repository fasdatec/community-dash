import React from "react";
import Sidebar from "../Navs/SidebarComponent/Sidebar";
import Navbar from "../Navs/NavBarComponent/Navbar";
import fasdatec from '../Dashboard/dashboard.module.scss'
import CardSubs from "./CardSubs";
import { ButtonYellowRound } from "../Buttons/Buttons";
 
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
                        advantagePlan={<ul>
                            <li>ejemplo 1</li>
                            <li>ejemplo 2</li>
                            <li>ejemplo 3</li>
                            </ul>}
                        buttonPlan={<ButtonYellowRound titleButton='Continuar gratis' direction='/Dashboard' />}/>
                        <CardSubs titlePlan='Pro' 
                        pricePlan='$18.00 USD'
                        describePlan='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
                        advantagePlan={<ul>
                            <li>ejemplo 1</li>
                            <li>ejemplo 2</li>
                            <li>ejemplo 3</li>
                            </ul>} 
                        buttonPlan={<stripe-buy-button className={fasdatec.commu__prueba} buy-button-id="buy_btn_1OAhJ7Aoi5Crq5LdbDQtYZ4u" publishable-key="pk_test_51O9rtYAoi5Crq5LdBzZwXeYZSY5CbBVGfLqk4OmgBwkos7PYA6UHbQum2k24L3ela4Ytti5HtADCClv3ZHth671r00I0NoiYjC">
                        </stripe-buy-button>} />
                        <CardSubs titlePlan='Expert' 
                        pricePlan='$40.00 USD'
                        describePlan='Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.'
                        advantagePlan={<ul>
                            <li>ejemplo 1</li>
                            <li>ejemplo 2</li>
                            <li>ejemplo 3</li>
                            </ul>} 
                        buttonPlan={<stripe-buy-button className={fasdatec.commu__prueba} buy-button-id="buy_btn_1OAhJ7Aoi5Crq5LdbDQtYZ4u" publishable-key="pk_test_51O9rtYAoi5Crq5LdBzZwXeYZSY5CbBVGfLqk4OmgBwkos7PYA6UHbQum2k24L3ela4Ytti5HtADCClv3ZHth671r00I0NoiYjC">
                        </stripe-buy-button>} />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default PlansSubs