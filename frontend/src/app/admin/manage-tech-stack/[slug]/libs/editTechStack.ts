import { IOption } from "@/app/libs/types";

export default async function editTechStack(stackData:IOption){
    const response = await fetch(`/api/tech-stack/manage`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(stackData)
    })
    const responseJSON = await response.json()
    if(!response.ok){
        throw new Error(responseJSON.message)
    }
    return responseJSON
}