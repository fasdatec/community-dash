import React from 'react'
import fasdatec from './post.module.scss'
import { FacebookEmbed, InstagramEmbed, LinkedInEmbed, TikTokEmbed, TwitterEmbed, YouTubeEmbed } from "react-social-media-embed";

const Post = () => {
  return (
    <>
    <div className={fasdatec.commu__post}>
      <FacebookEmbed className ={fasdatec.commu__post__facebook} url="https://www.facebook.com/Formula1/posts/pfbid02iQmC76nYo31NUae7THwjdHYZyWKN8vLfkuaXUbZ4QEDma59y4mEfKQbPBKzjNyU8l?rdid=32c6CpK1UBWOrTbZ" width={328} />
      <InstagramEmbed url="//www.instagram.com/p/C9nn7VcxmIP/" width={328} />
      <TikTokEmbed url="https://www.tiktok.com/@fasdatec/video/7431257603348417798" width={325} />
      <TwitterEmbed url="https://x.com/F1/status/1851605414409916662" width={325} />
      <YouTubeEmbed url="https://youtu.be/hHJH-CEWH3U?si=X37Qu5bMIkQI6vrO" width={325} height={220} />
      <LinkedInEmbed 
    url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
    postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
    width={325}
    height={570} 
  />
    </div>          
    </>
  )
}
export default Post 