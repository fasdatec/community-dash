import React from 'react'
import Navbar from '../Navs/NavBarComponent/Navbar'
import Sidebar from '../Navs/SidebarComponent/Sidebar'
import fasdatec from '../Dashboard/dashboard.module.scss';
import PostSocialMediabyClient from '../PostSocialMedia/PostSocialMediabyClient';
import fblogo from "../../assets/images/fblogo.svg"

const CreatePostbyClient = () => {
  return (
    <>
        <section className={fasdatec.commu__section__post}>
            <div  className={fasdatec.commu__section__navigation}>
                <Navbar />
            </div>
            <div className={fasdatec.commu__post}>
                <Sidebar />
                <div className={fasdatec.commu__section__create__post}>
                    <h1>Selecciona una red Social para hacerle un Post</h1>
                    <div className={fasdatec.commu__post__social}>
                        <PostSocialMediabyClient titleSocialMedia='Facebook' imglogo={fblogo}/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CreatePostbyClient