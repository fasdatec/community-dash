import React from "react";
import fasdatec from "./cardsubs.module.scss"
import { ButtonYellowRound } from "../Buttons/Buttons";
import { ButtonYellowTransparentRound } from "../Buttons/Buttons";
const CardSubs = ({titlePlan, pricePlan, describePlan, advantagePlan}) =>{
    return (
        <>
        <div className={fasdatec.commu__card__subs}>
            <h1 className={fasdatec.commu__card__subs__title}>{titlePlan}</h1>
            <p className={fasdatec.commu__card__subs__price}>{pricePlan}</p>
            <p>{describePlan}</p>
            <p className={fasdatec.commu__card__subs__advantage}>Beneficios</p>
            <ul>
                <li>
                    {advantagePlan}
                </li>
            </ul>
            <div className={fasdatec.commu__card__subs__buttons}>
                <ButtonYellowTransparentRound titleButton='Comprar ahora' direction='/Pago' />
            </div>
        </div>
        </>
    )
}
export default CardSubs