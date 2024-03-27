import React, { useState } from 'react'
import './Post.css';

import groupIcon from '../images/groupIcon.png';
import up from '../images/up.png';
import unbookmarkIcon from '../images/unbookmark.png';
import bookmarkIcon from '../images/bookmark.png';
import likeIcon from '../images/like.png';
import unlikeIcon from '../images/unlike.png';
import editIcon from '../images/edit.png'

function Post() {
    const [readMore, setreadMore]= useState(false);
    const [likeStatus, changelikedStatus]= useState("unliked");
    
    const [bookmarkedStatus, chngebookmarkedStatus]= useState(false);
  return (
    <div className='post_body'>
        <div className='post_heading'>
            <div className='post_heading_info'>
            <img src={groupIcon} alt="img" />
            <div>
                <h2>Group Name</h2>
                <h3>admin name</h3>
            </div>
            </div>
            <button className='join_btn'>Join</button>
        </div>
        <div className='post_content' style={readMore ? {overflow:'visiable', height:'auto'} : {overflow:"hidden", height:'50vh'}} onClick={()=>{if(!readMore) setreadMore(true);
         else setreadMore(false)}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam blanditiis esse nesciunt consectetur debitis, ut iusto quis sunt facere tempore aut temporibus modi saepe qui obcaecati deleniti earum velit veniam cupiditate iste consequatur odio? 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam asperiores quaerat nihil tenetur possimus eveniet earum qui ut dolorem officiis praesentium sit voluptatum error sint beatae neque vero saepe odio, maxime repellat tempore aperiam. Deserunt, qui earum. Asperiores voluptatum odit aliquam nemo perspiciatis. Magni nulla possimus ipsa facilis! Sed, soluta! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor maiores blanditiis porro, pariatur necessitatibus ad omnis nobis, ipsam animi eos harum praesentium excepturi odit culpa est iure numquam repellat deleniti voluptate delectus, maxime magni at rerum. Officiis, ipsam deserunt. Exercitationem magni id suscipit repellendus laborum quam unde. Minima sapiente a quisquam nobis deserunt ut velit, ipsam dolorem recusandae et fuga voluptas nihil, repellendus, aspernatur corporis ducimus? Deleniti nostrum similique ratione saepe iure quibusdam quaerat obcaecati voluptatum, voluptates minus adipisci facilis! Alias officia, voluptas magnam commodi quod tenetur et quisquam aperiam animi velit, rem quia illo odit beatae dicta numquam ipsum expedita, sit debitis! Asperiores hic temporibus, qui totam numquam quisquam molestias, maiores tenetur eius corrupti impedit eos inventore modi debitis itaque alias minima deserunt vel quis reiciendis ipsum accusamus in sequi eligendi. Vero obcaecati consectetur ab! Voluptate dicta distinctio commodi esse alias quia nostrum libero! Laudantium, excepturi aliquid. Repudiandae animi harum maxime aperiam cum quia atque ullam suscipit corrupti officia iure asperiores facilis ipsam doloribus, voluptatem eligendi, vitae reiciendis quam alias adipisci, quaerat maiores eveniet delectus. Magni odit porro placeat sed aliquid? Asperiores quos illo voluptatum quia, maiores sunt! Consequuntur, quam id! Nostrum asperiores, quam quod architecto a, qui facere maxime, rem vero dicta ipsum? Assumenda debitis fugiat quisquam soluta tempore beatae quibusdam quod impedit maxime voluptate. Sequi nostrum ad cupiditate voluptatum aliquid. Cumque nulla tempore laudantium rerum atque delectus accusamus adipisci quo! Qui optio asperiores culpa labore ut excepturi corrupti blanditiis doloribus! Quisquam aliquam dignissimos vero dicta ab non voluptate placeat omnis? Velit, autem tempore! Suscipit, dolor aperiam sunt animi laborum voluptate. Ut fugit et molestias atque odit voluptas ipsam voluptates molestiae cumque aperiam id aliquid minus repellendus animi repellat, culpa, facere neque itaque explicabo! Soluta sequi necessitatibus aliquam praesentium voluptatem unde neque cum itaque quae delectus, possimus, reiciendis consequuntur eligendi doloremque. Repudiandae numquam ea aliquid nisi libero id itaque quae mollitia perspiciatis, qui eveniet, et reprehenderit aliquam. Dicta animi recusandae error nulla minus quam expedita fugit culpa praesentium neque temporibus molestias itaque alias exercitationem suscipit, tempore magni aliquid. Praesentium enim adipisci ducimus dicta accusamus tempora corrupti similique molestias quos beatae consequatur veniam at, doloribus quidem dolorem ipsum aut maxime deleniti quibusdam hic, minima tenetur dolores? Ipsum cupiditate eaque molestias velit non! Blanditiis repellat quos recusandae praesentium explicabo, commodi doloremque ullam maxime fuga eos aperiam aut quam dolorem impedit expedita sit animi ducimus, vitae illum, deleniti eaque tempore?
            <div className='Show' style={readMore ? {display: 'none'} : {display: 'flex'}}>
                Read More...
                {/* <img src={up} alt=""  style={readMore ? {display: 'none'} : {display: 'inline-block'}}/> */}
            </div>
        </div>
       
        <div className='post_footer'>
            <div className='like-unlike'  onClick={()=>{
                    if(likeStatus=='liked') changelikedStatus('unliked');
                    else changelikedStatus('liked'); 
                }}>
                <img src={likeStatus=='liked' ? likeIcon : unlikeIcon} alt="" />
                <div>Like</div>
            </div>
              <div onClick={()=>{
                    if(likeStatus=='disliked') changelikedStatus('undisliked');
                    else changelikedStatus('disliked'); 
                }}>
                <img src={likeStatus=='disliked' ? likeIcon : unlikeIcon} style={{transform: "rotate(180deg)"}} alt="" />
                <div>Dislike</div>
            </div>
            <div>
            <img src={editIcon} alt="" />
            <div>Edit</div>
            </div>
            <div onClick={()=>{
                    if(bookmarkedStatus) chngebookmarkedStatus(false);
                    else chngebookmarkedStatus(true); 
                }}>
                <img src={bookmarkedStatus ? unbookmarkIcon: bookmarkIcon} alt=""   />
                <div>Bookmark</div>
                </div>
        </div>
    </div>
  )
}

export default Post