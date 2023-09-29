export default async function deleteTechStack(id:string){
    const response = await fetch(`/api/tech-stack/manage?id=${id}`,{
        method:"DELETE"
    })
    const responseJSON = await response.json()
    if(!response.ok){
        throw new Error(responseJSON.message)
    }
    console.log({
        status:response.status,
        message: responseJSON
    },"insed")
    return {
        status:response.status,
        message: responseJSON
    }
}