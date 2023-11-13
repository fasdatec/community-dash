import React from "react";
import fasdatec from "./cardsubs.module.scss"

const CardSubs = ({titlePlan, pricePlan, describePlan, advantagePlan, buttonPlan}) =>{
    return (
        <>
        <div className={fasdatec.commu__card__subs}>
            <h1 className={fasdatec.commu__card__subs__title}>{titlePlan}</h1>
            <p className={fasdatec.commu__card__subs__price}>{pricePlan}</p>
            <p>{describePlan}</p>
            <p className={fasdatec.commu__card__subs__advantage}>Beneficios</p>
                {advantagePlan}
            <div className={fasdatec.commu__card__subs__buttons}>
                {buttonPlan}
            </div>
        </div>
        </>
    )
}
export default CardSubs