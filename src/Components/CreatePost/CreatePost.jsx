import React from 'react'
import Navbar from '../Navs/NavBarComponent/Navbar'
import Sidebar from '../Navs/SidebarComponent/Sidebar'
import fasdatec from '../Dashboard/dashboard.module.scss';
import PostSocialMedia from '../PostSocialMedia/PostSocialMedia';
import iglogo from "../../assets/images/iglogo.svg"
import fblogo from "../../assets/images/fbnw.svg"
import tklogo from "../../assets/images/ttblacknw.svg"
import ytblogo from "../../assets/images/ytnw.svg"
import xlogo from "../../assets/images/xlogo.svg"
import inlogo from "../../assets/images/inlogo.svg" 
const CreatePost = () => {
  return (
    <>
    <section className={fasdatec.commu__section__post}>
        <div className={fasdatec.commu__section__navigation}>
          <Navbar />
        </div>
        <div className={fasdatec.commu__post}>
          <Sidebar />
          <div className={fasdatec.commu__section__create__post}>
            <h1>Creación de Posts</h1>
            <div className={fasdatec.commu__post__social}>
              <PostSocialMedia titleSocialMedia='Facebook' imglogo={fblogo} />
              <PostSocialMedia titleSocialMedia='Instagram' imglogo={iglogo} />
              <PostSocialMedia titleSocialMedia='TikTok' imglogo={tklogo} />
              <PostSocialMedia titleSocialMedia='YouTube' imglogo={ytblogo} />
              <PostSocialMedia titleSocialMedia='X' imglogo={xlogo} />
              <PostSocialMedia titleSocialMedia='LinkedIn' imglogo={inlogo} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default CreatePost