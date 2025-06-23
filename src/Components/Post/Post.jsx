import React from 'react'
import fasdatec from './post.module.scss'
import { FacebookEmbed, InstagramEmbed, LinkedInEmbed, TikTokEmbed, TwitterEmbed, YouTubeEmbed } from "react-social-media-embed";


const Post = () => {
  return (
    <>
    <div className={fasdatec.commu__post}>
      <FacebookEmbed className ={fasdatec.commu_post_facebook} url="https://www.facebook.com/100077404405612/posts/pfbid036jtaZUWSAJLaeYuApzzFeMdx9dRRa9mH1c5AusoCmjs4ep1i6ss2UjQW9WmtB1XEl/?mibextid=9R9pXO" width={328} />
      <InstagramEmbed url="https://www.instagram.com/p/CyOq3mHpRD3/?igshid=MTc4MmM1YmI2Ng==" width={328} />
      <TikTokEmbed url="https://www.tiktok.com/@espinoza19740/video/7246694024986283270" width={325} />
      <TwitterEmbed url="https://twitter.com/CondorPana/status/1713718363904454746?ref_src=twsrc%5Etfw" width={325} />
      <YouTubeEmbed url="https://www.youtube.com/embed/Djgw-uR2n34?si=ujTjlGp4qQVnmd3D" width={325} height={220} />
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