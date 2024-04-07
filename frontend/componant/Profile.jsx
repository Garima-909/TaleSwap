import React,{useState} from 'react'
import Post from './Post'

function Profile() {
    const [st, changeSt] = useState('post');
  return (
    
    <div>
       <div>
        <img src="" alt="" />
        </div> 
       <div>
        <h2>person name</h2>
        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis voluptate ullam magni vitae. Maiores, officia nisi! Ut quisquam sit aperiam.</h3>

       </div>
       <hr />
       <div>
       <h3  onClick={()=>{changeSt('post')}}>Post</h3>
       <h3 onClick={()=>{changeSt('group')}}>Group</h3>
       </div>
      <div>
        { st=='post'? <Post/> : <h2>group</h2>}
      </div>
    </div>
  )
}

export default Profile