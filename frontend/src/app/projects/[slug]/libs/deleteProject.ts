export default async function deleteProject(id:string){

    const response = await fetch(`/api/projects/manage-project?id=${id}`,{method:"DELETE"})
    const responseJSON = await response.json()
    if(!response.ok){
        throw new Error(responseJSON.message)
    }
    return {
        status:response.status,
        message: responseJSON
    }
}