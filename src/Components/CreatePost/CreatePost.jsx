import React from 'react'
import Navbar from '../Navs/NavBarComponent/Navbar'
import Sidebar from '../Navs/SidebarComponent/Sidebar'
import fasdatec from '../Dashboard/dashboard.module.scss';
import PostSocialMedia from '../PostSocialMedia/PostSocialMedia';
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
            <PostSocialMedia 
            titleSocialMedia='Facebook'/>
          </div>
        </div>
      </section>
    </>
  )
}
export default CreatePost