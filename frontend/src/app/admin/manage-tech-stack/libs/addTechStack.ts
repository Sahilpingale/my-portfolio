import { IOption } from "@/app/libs/types";

export default async function addTechStack(techStackData: IOption) {
  const response = await fetch(`/api/tech-stack/manage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(techStackData),
  });
  const responseJSON = await response.json()
  if(!response.ok){
    throw new Error(responseJSON.message)
  }
  return responseJSON
}
