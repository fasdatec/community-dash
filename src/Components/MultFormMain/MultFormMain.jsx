import React from 'react'
import fasdatec from '../Dashboard/dashboard.module.scss';
import MultistepForm from '../Forms/MultistepForm/MultistepForm';

const MultFormMain = () => {
  return (
    <>
    <section className={fasdatec.commu__section__post}>
        <div className={fasdatec.commu__post}>
            <div className={fasdatec.commu__multistep__form}>
                <MultistepForm />
            </div>
        </div>
    </section>
    </>
  )
}
export default MultFormMain