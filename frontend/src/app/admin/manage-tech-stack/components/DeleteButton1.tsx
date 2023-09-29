"use client";
import { useState } from "react";
import deleteTechStack from "../[slug]/libs/deleteTechStack";
import { useRouter } from "next/navigation";

const DeleteButton1 = ({ id }: { id: string | undefined }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (id: string) => {
    console.log("inside handle delete")
    setIsDeleting(true);
    const res = await deleteTechStack(id);
    console.log(res,"ress")
    if (res.status === 200) {
      router.refresh();
      router.push("/");
    }
    setIsDeleting(false);
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
export default DeleteButton1;
