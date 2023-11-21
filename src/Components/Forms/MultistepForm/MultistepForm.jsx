import React, { useState } from "react";
import { Link } from 'react-router-dom';
import routes from "../../../assets/helpers/routes";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepFinal from "./StepFinal";
import fasdatecOne from "./multistepform.module.scss"
import { ButtonYellowRoundOnC, ButtonYellowTransparentRoundOnC, ButtonYellowRound } from "../../Buttons/Buttons";

class MultistepForm extends React.Component {
    state  = {
        step: 1,
    };

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step -1
        });
    };

    render() {
        switch (this.state.step) {
            case 1:
                return (
                    <>
                        <StepOne />
                        <div className={fasdatecOne.commu__form__multi__buttons}>
                            <div className={fasdatecOne.commu__form__buttons}>
                                <ButtonYellowRoundOnC direction={this.nextStep} titleButton="Siguiente" />
                            </div>
                        </div>
                    </> 
                );
            case 2:
                return (
                    <>
                        <StepTwo />
                        <div className={fasdatecOne.commu__form__multi__buttons}>
                            <div className={fasdatecOne.commu__form__buttons}>
                                <ButtonYellowTransparentRoundOnC direction={this.prevStep} titleButton="Anterior" />
                                <ButtonYellowRoundOnC direction={this.nextStep} titleButton="Siguiente" />
                            </div>
                        </div>
                    </>
                )
            case 3:
                return (
                    <>
                        <StepFinal />
                        <div className={fasdatecOne.commu__form__multi__buttons}>
                            <div className={fasdatecOne.commu__form__buttons}>
                                <ButtonYellowTransparentRoundOnC direction={this.prevStep} titleButton="Anterior" />
                                <Link to={routes.dashboard}>Generar</Link>
                            </div>
                        </div>        
                    </>
                )        
        }
    }
}
export default MultistepForm