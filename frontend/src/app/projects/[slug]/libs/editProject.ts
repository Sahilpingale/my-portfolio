import { IProject } from "@/app/libs/types";

export default async function editProject(
  projectId: string,
  projectData: IProject
) {
  const response = await fetch(`/api/projects/manage-project/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });
  const res = await response.json();
  if (!response.ok) {
    throw new Error(res.message);
  }
  return res
}