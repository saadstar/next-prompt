'use client';

import React ,{useState,useEffect} from 'react';
import axios from "axios";
import Image from 'next/image';
import {useSession} from "next-auth/react";
import {usePathname,useRouter} from "next/navigation";


export const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [post, setPost] = useState([]);
  const [copied, setCopied] = useState("");
  const {data:session}=useSession();

  const searchHandler=(e)=>{
   
  }
  
  const handleTagClick=(e)=>{
   
  }
  useEffect(() => {
    const fetchData=async ()=>{
      const res=await axios.get("http://localhost:3500/api/prompt/");
      setPost(res.data);
    }
    fetchData();
  }, []);
  return (
   <section className="feed">
    <form className="relative w-full flex-center">
    <input 
    type="text"
    className="peer search_input absolute top-0"
    placeholder="search for tag or username"
    value={searchText}
    onChange={searchHandler}
    required
    />
   <div className="mt-16 prompt_layout">
        {post.map((item)=>{
          const handleCopy=()=>{
   setCopied(item.prompt);
   navigator.clipboard.writeText(item.prompt);
   setTimeout(() => {
    setCopied("");
   }, 3000);
  }
          return( 
          <div className='prompt_card'>        
              <div className="flex justify-between items-start gap-5">
                <div className="flex-1 flex justify-center items-center gap-3 cursor-pointer ">
                  <Image src={session?.user.image} alt="user_pic" width={40} height={40} className="rounded-full object-contain"/>
                  <div className="flex flex-col">
                    <p className="font-satoshi font-semibold text-gray-700">{session?.user.name}</p>
                    <p className="font-inter text-sm text-gray-500">{session?.user.email}</p>
                  </div>
                </div>
                <div className='copy_btn' onClick={handleCopy}>
                <Image src={copied === item.prompt ?"/assets/icons/tick.svg":"/assets/icons/copy.svg"} alt="fsd" className="cursor-pointer" width={12} height={12}/>
                </div>
              </div>
              <h3 className="my-4 font-satoshi text-sm text-gray-900">{item.prompt}</h3>
              <p className="font-inter text-sm blue_gradient cursor-pointer" onClick={()=>handleTagClick && handleTagClick(item.tag)}>{item.tag}</p>
            </div>               
        )})}
    </div>
    </form>
   </section>
  )
}
