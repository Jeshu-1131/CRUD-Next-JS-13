"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate=useRouter();

    const handleSubmit=async(e)=>{
        e.preventDefault();

        if(!title||!description){
            alert("Title and description required");
            return;
        }

        try{
            const res=await fetch('http://localhost:3000/api/topics',{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                },
                body:JSON.stringify({title,description}),
            })

            if(res.ok){
                navigate.push("/");
            }else{
                throw new Error("Failed to create a topic")
            }
        }catch(error){
            console.log(error)
        }
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input onChange={(e) => setTitle(e.target.value)} value={title} className="border border-slate-500 px-6 py-2" type="text" placeholder="Topic Title" />
            <input onChange={(e) => setDescription(e.target.value)} value={description} className="border border-slate-500 px-6 py-2" type="text" placeholder="Discription" />
            <button type="submit" className="bg-blue-500  font-bold text-white py-2 px-4 w-fit rounded-sm">
                Add
            </button>
        </form>
    )
}