export default async function getProjectDetails(id:string){
    const response = await fetch(`${process.env.DOMAIN}/api/projects/manage-project/${id}`,{cache:"no-cache"})
    const resposeJSON = await response.json()
    if(!response.ok){
        throw new Error(resposeJSON.message)
    }
    return await resposeJSON
}