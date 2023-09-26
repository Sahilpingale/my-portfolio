export default async function addProject(projectData:any){
    const response = await fetch(`/api/projects/manage-project`,
    {
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify(projectData)
} )
    if(!response.ok){
        throw new Error("Failed to add project")
    }
    return await response.json()
}