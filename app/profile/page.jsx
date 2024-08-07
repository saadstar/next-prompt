'use client';

import React ,{ useState,useEffect } from 'react';
import axios from "axios";
import {useSession} from "next-auth/react";
import {CardList} from "@components/CardList";

const Page = () => {
    const {data :session} =useSession();
    const [post, setPost] = useState([]);  


    useEffect(() => {
      const fetchuserPosts=async(e)=>{
        try{
          const res=await fetch(`http://localhost:3500/api/user/${session?.usesr.id}/posts`);
          const data=await res.json();          
            setPost(data);
        }catch(err){
            console.log(err);
        }
      }
     fetchuserPosts();
    });
  return (
     <div className="mt-16 prompt_layout">
   {post.map((item)=>{
    console.log(item)
    return(
      <div>{item.prompt}</div>
    )
   })} 
    </div>
  )
}

export default Page;