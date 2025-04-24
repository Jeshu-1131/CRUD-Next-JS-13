"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const EditTopicForm = ({ id, title, description }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setnewDescription] = useState(description);

    const router=useRouter();
    const handleSubmit=async(e)=>{
        e.preventDefault();

        try{
            const res=await fetch(`http://localhost:3000/api/topics/${id}`,{
                method:"PUT",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({newTitle,newDescription}),
            });

            if(!res.ok){
                throw new Error("Failed to update topic");
            }
            router.push("/")
        }catch(error){
            console.log(error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input onChange={(e) => setNewTitle(e.target.value)} value={newTitle} className="border border-slate-500 px-6 py-2" type="text" placeholder="Topic Title" />
            <input onChange={(e) => setnewDescription(e.target.value)} value={newDescription} className="border border-slate-500 px-6 py-2" type="text" placeholder="Discription" />
            <button type="submit" className="bg-blue-500  font-bold text-white py-2 px-4 w-fit rounded-sm">
                Update Topic
            </button>

        </form>
    )
}

export default EditTopicForm;
