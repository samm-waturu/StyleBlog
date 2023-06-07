"use client";
import {useState} from "react"
import {useForm} from "react-hook-form"
import React from "react";

export default function Form({_id}) {
    const [formData, setFormData] = useState()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm()
    const onSubmit = async (data) => {
        setIsSubmitting(true)
        let response
        setFormData(data)
        try {

            response = await fetch('/api/createComment', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            setIsSubmitting(false)
            setHasSubmitted(true)
        } catch (err) {
            setFormData(err)
        }
    }

    if (isSubmitting) {
        return <h1 className={'text-3xl font-bold animate-pulse'}>Submitting comment... </h1>
    }
    if (hasSubmitted) {
        return (
            <>
                <div className={'flex flex-col mx-auto p-10 my-10 bg-blue-500 text-white max-w-2xl mx-auto'}>
                    <h1 className={'text-3xl font-bold'}>Successfully submitted </h1>
                    <p style={{fontSize: 16}} className={'font-light'}>Once your comment is approved, it will appear
                        below</p>
                </div>
            </>
        )
    }

    return (
        <div className={'pb-8 mt-4'}>
            <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col my-5 max-w-2xl mx-auto mb-10'}>
                <h4 className={'text-2xl font-bold'}>Leave a comment below</h4>
                <hr className={'py-3 mt-2'}/>
                <label htmlFor='id' className={'hidden'}>
                            <span>
                              _id
                            </span>
                    <input type='hidden' value={_id} {...register('_id')} />
                </label>
                <label htmlFor='Name' className={'mb-5 block'}>
                              <span className={'text-gray-700 text-sm font-bold'}>
                                Name
                              </span>
                    <input type='text' placeholder={'Your name'}  {...register('name', {required: true})}
                           className={'shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-blue-400 outline-none focus:ring placeholder:text-sm font-light'}/>
                    {errors.name && (
                        <span
                            className={'font-bold text-xs text-red-500 p-2'}>Your name field is required</span>)}
                </label>
                <label htmlFor='Email' className={'mb-5 block'}>
                            <span className={'text-gray-700 text-sm font-bold'}>
                                Email
                            </span>
                    <input type='email' placeholder={'Your Email'}  {...register('email', {required: true})}
                           className={'shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-blue-500 outline-none focus:ring placeholder:text-sm font-light'}/>
                    {errors.email && (
                        <span className={'font-bold text-xs text-red-500 p-2'}>Email field is required</span>)}
                </label>
                <label htmlFor='Comment' className={'mb-5 block'}>
                              <span className={'text-gray-700 text-sm font-bold'}>
                                Comment
                              </span>
                    <textarea placeholder={'Comment'}  {...register(`comment`, {required: true})} rows={6}
                              className={'shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-blue-500 outline-none focus:ring placeholder:text-sm font-light'}/>
                    {errors.comment && (
                        <span className={'font-bold text-xs text-red-500 p-2'}>Please add your comment</span>)}
                </label>

                <span>
                          <input type='submit'
                                 className={'transition ease-in-out shadow bg-blue-200 hover:bg-blue-300 hover:-translate-y-1 hover:scale-105 delay-150 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-1 block w-full cursor-pointer'}/>
                        </span>


            </form>
        </div>
    )
}
