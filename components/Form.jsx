import Link from 'next/link'
import React from 'react'

export const Form = ({type,post,setPost,submiting,setSubmiting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left blue_gradient' style={{marginTop:"0px"}}>{type} Post</h1>
      <p className='desc text-left max-w-md'>{type} and share amazing  prompts with th words.
        and let your imagination run wild with any AI-powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className='mt-5 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Your AI Prompt</span>
        <textarea value={post.prompt} onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          placeholder='write your prompt here...'
          required
          className='form_textarea'
          />
          </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Tag {' '}
            <span className='font-normal'>(#product,#webdevelopment,#idea)</span></span>
        <input value={post.tag} type='text' onChange={(e) => setPost({ ...post, tag: e.target.value })}
          placeholder='#Tag'
          required
          className='form_input'
          />
        </label>
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href={"/"} className='text-gray-500 text-sm'>Cancel</Link>
          <button type='submit' className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white ' disabled={submiting}>{submiting ? `${ type }...`:type}</button>
        </div>
      </form>
    </section>
  )
}
