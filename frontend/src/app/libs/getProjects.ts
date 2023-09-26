

export default async function getProjects() {
    // const response = await fetch(`https://my-portfolio-70prhtcpv-sahilpingale.vercel.app/api/projects/manage-project`,{cache:"no-store"})
    const response = await fetch(`${process.env.DOMAIN}/api/projects/manage-project`,{cache:"no-cache"})
    const resposeJSON = await response.json()
    if(!response.ok){
        throw new Error(resposeJSON.message)
    }
    return await resposeJSON
}