import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import appWriteService from "../../appwrite/config";
import { useForm } from "react-hook-form";
import { Button, Input, Select } from "../index";

const PostForm = ({ post }) => {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);

  const submit = async (data) => {

      if(post){
          
        const file = await data.image[0] ? appWriteService.uplaodFile(data.image[0]) : null; 

        if (file) {
            appWriteService.deleteFile(post.featuredImage);
        }

        const updatePost = await appWriteService.updatePost(
            post.$id, 
            {
               ... data,
               featuredImage : file ? file.$id : post.featuredImage
            })   

          if (updatePost) {
            navigate(`/post/${updatePost.$id}`)
          }




      }



  };

  return <div>PostForm</div>;
};

export default PostForm;
