"use client";

import { IOption } from "@/app/libs/types";
import { useRouter } from "next/navigation";

interface IProps {
  title: string;
  stackList: any;
}

export default function StackList({ stackList, title }: IProps) {
    const router = useRouter()
    const handleClick = (id:string)=>{
        router.push(`/admin/manage-tech-stack/${id}`)
    }
  return (
    <div className="mx-5 my-3 mb-4">
      <h2 className="heading-secondary">{title}</h2>
      <div className="stack-list-container">
        {stackList.map((item: any) => (
          <div onClick={()=>handleClick(item.id)} className="stack-list-item">
            {item.label}

            <img
                className="stack-item-image"
              src={`${process.env.NEXT_PUBLIC_CDN_TECH_STACK}/${item.id}/${item.images[0]}`}
              alt={`${process.env.NEXT_PUBLIC_CDN_TECH_STACK}/${item.id}/${item.images[0]}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
