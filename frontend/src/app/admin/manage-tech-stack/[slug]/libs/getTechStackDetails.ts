

export default async function getTechStackDetails(id:string){
    const response = await fetch(`${process.env.DOMAIN}/api/tech-stack/manage/${id}`,{cache:"no-store"})

    const responseJSON = await response.json()
    if(!response.ok){
        throw new Error(responseJSON.message)
    }
    return responseJSON
}