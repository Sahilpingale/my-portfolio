"use client";
import { useState } from "react";
import deleteProject from "../../../../projects/[slug]/libs/deleteProject";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }: { id: string | undefined }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (id: string) => {
    setIsDeleting(true);
    const res = await deleteProject(id);
    if (res.status === 200) {

      router.refresh();
      router.push("/");
    }
    setIsDeleting(false)
  };
  return (
    <>
      {id && (
        <button
          type="button"
          onClick={() => handleDelete(id)}
          disabled={isDeleting}
          className="form-delete-button"
        >
          {isDeleting ? "Deleting" : "Delete"}
        </button>
      )}
    </>
  );
};
export default DeleteButton;
