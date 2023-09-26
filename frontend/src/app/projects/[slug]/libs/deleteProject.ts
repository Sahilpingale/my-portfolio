export default async function deleteProject(id:string){

    const response = await fetch(`/api/projects/manage-project?id=${id}`,{method:"DELETE"})
    console.log("my response", response)
    const resposeJSON = await response.json()
    if(!response.ok){
        throw new Error(resposeJSON.message)
    }
    return {
        status:response.status,
        message: resposeJSON
    }
}