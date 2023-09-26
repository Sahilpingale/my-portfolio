"use client";
import { TrashIcon, ManageIcon } from "./Icons";
import deleteProject from "../libs/deleteProject";
import { useRouter } from 'next/navigation'
import { useState } from "react";


export default function DeleteProject({projectId}: {projectId: string}) {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const handleDelete = async()=>{
        setIsLoading(true)
        const res = await deleteProject(projectId)
        if (res.status === 200){
            router.refresh()
            router.push('/')
        }
        setIsLoading(false)
    }
  return (
    <button
      onClick={handleDelete}
      className="flex gap-1 alignCenter defaultButton"
      disabled={isLoading}
    >
      <span>Delete</span> <TrashIcon />
    </button>
  );
}
