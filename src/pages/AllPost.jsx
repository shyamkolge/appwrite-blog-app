import React ,{useEffect, useState} from 'react'
import {Container , PostCard  } from '../conponents'
import appWriteService from '../appwrite/config'

const AllPost = () => {

    const [post , setPost] = useState([]);

    useEffect(()=>{}, []);

    appWriteService.getAllPosts([]).then((posts)=>{
         if (posts) {
            setPost(posts.documents)
         }
    })

  return (
    <div>
        <Container>
            <div className='flex flex-wrap'>
               {
                  post.map((post)=>(
                     <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post = {post}/>
                     </div>
                  ))
               }
            </div>
        </Container>
    </div>
  )
}

export default AllPost