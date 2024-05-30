import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

const PostCard = ({$id, title , featuredImage }) => {
  return (
      <Link to={`/post/${$id}`}>
      
         <div className='w-full rounded-xl bg-gray-100 p-4'>
            
            <div className='w-full justify-center mb-4'> 
                <img src={appwriteService.getFilePreview(featuredImage)} alt=""  className='rounded-lg'/>
            </div>
            <h2 className='text-xl font-blod'>{title}</h2>
         </div>
      
      </Link>
  )
}

export default PostCard