export default async function getStackItems(){
    const response = await fetch(`/api/tech-stack/manage`,{cache:"no-store"})
    const responseJSON = await response.json()
    if(!response.ok){
        throw new Error(responseJSON.message)
    }
    return responseJSON
}