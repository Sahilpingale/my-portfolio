

export default async function getProjects() {
    const response = await fetch(`${process.env.DOMAIN}/api/projects/manage-project`,{cache:"no-store"})
    if(!response.ok){
        throw new Error("Failed to fetch projects")
    }
    return await response.json()
}