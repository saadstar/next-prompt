'use client';
import React, { useState } from 'react'
import { useSession } from 'next-auth/react';
import { Form } from '@components/Form';
import { useRouter } from 'next/navigation';
import axios from "axios";

const CreatePrompt = () => {
  const router = useRouter();
  const [submiting, setSubmiting] = useState(false)
  const [post, setPost] = useState({ prompt: "", tag: '' });
  const { data: session } = useSession();
  
  const createPost = async (e)=>{
    e.preventDefault();
    setSubmiting(true);
    try {
      // const response = await fetch("http://localhost:3500/api/prompt/new", {
      //   method: "POST",
      //   body:{
      //     prompt:post.prompt,
      //     tag: post.tag,
      //     userId:session?.user.id,
      //   }
      // })
      // if(response.ok){
      //   router.push("/");
      // }
      const res=await axios.post("http://localhost:3500/api/prompt/new",{
        prompt:post.prompt,
        tag: post.tag,
        creator:session?.user.id,})
      setSubmiting(false);
      res.status === 201 && router.push("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <Form
      type='create'
    post={post}
    setPost={setPost}
    submiting={submiting}
      setSubmiting={setSubmiting}
      handleSubmit={createPost}
    />
  )
}

export default CreatePrompt
