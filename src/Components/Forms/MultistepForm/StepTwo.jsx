import React from "react"
import fasdatecOne from "./multistepform.module.scss"

const StepTwo = () => {
    return (
        <>
        <div className={fasdatecOne.commu__section__form__container}>
              <h2 className={fasdatecOne.commu__form__subtitle}>Ingresa los Datos que se piden 2</h2>
              <div >{/*formu*/}
                <div className={fasdatecOne.commu__flexrow__form}>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="example" className={fasdatecOne.commu__creation__label}>Example 1</label>
                    <input type="text" id='example'  className={fasdatecOne.commu__creation__input} placeholder='Example 1'/>
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="example" className={fasdatecOne.commu__creation__label}>Example 2</label>
                    <input type="text" id='example' className={fasdatecOne.commu__creation__input} placeholder='Example 2'/>
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="example" className={fasdatecOne.commu__creation__label}>Example 3</label>
                    <input type="text" id='example' className={fasdatecOne.commu__creation__input} placeholder='Example 3'/>
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="example" className={fasdatecOne.commu__creation__label}>Example 3</label>
                    <input type="text" id='example' className={fasdatecOne.commu__creation__input} placeholder='Example 3'/>
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="example" className={fasdatecOne.commu__creation__label}>Example 3</label>
                    <input type="text" id='example5' className={fasdatecOne.commu__creation__input} placeholder='Example 3'/>
                  </div>
                  <div className={fasdatecOne.commu__flexclm__form}>
                    <label htmlFor="example" className={fasdatecOne.commu__creation__label}>Example 3</label>
                    <input type="text" id='example6' className={fasdatecOne.commu__creation__input} placeholder='Example 3'/>
                  </div>
                </div>
              </div>{/*formu*/}
            </div>
        </>
    )
}
export default StepTwo