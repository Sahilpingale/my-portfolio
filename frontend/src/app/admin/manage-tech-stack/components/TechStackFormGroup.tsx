"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import { IOption } from "@/app/libs/types";
import addTechStack from "../libs/addTechStack";
import { useRouter } from "next/navigation";
import editTechStack from "../[slug]/libs/editTechStack";
import deleteTechStack from "../[slug]/libs/deleteTechStack";
import DeleteButton1 from "./DeleteButton1";
import { v4 as uuid } from "uuid";
import { supabase } from "@/app/libs/supabase";
import { CloseCircleOutline } from "react-ionicons";
import Image from "next/image";
import Loader from "@/app/components/Loader/Loader";

interface IProps {
  stackData: IOption;
  id?: string | undefined;
}

const TechStackFormGroup = ({ stackData, id }: IProps) => {
  const router = useRouter();
  // State Management
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [file, setFile] = useState(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [techStackImage, setTechStackImage] = useState<any>(null);

  const BUCKET = "Portfolio_Bucket";

  const formik = useFormik({
    initialValues: stackData,
    validationSchema: Yup.object({
      label: Yup.string().required("Label is required"),
      type: Yup.string()
        .oneOf(["TECHSTACK", "TOOL"])
        .required("Type of tech stack is required"),
    }),
    onSubmit: async (values) => {
      // Create New Tech Stack item
      if (!id) {
        try {
          setIsSaving(true);
          const newStack = await addTechStack(values);
          router.push(`/admin/manage-tech-stack/${newStack.data.id}`);
        } catch (err) {
          console.log("Failed to add tech stack123", err);
        } finally {
          setIsSaving(false);
        }
      }
      // Edit Existing Tech stack Item
      if (id) {
        try {
          setIsSaving(true);
          const formatedValue = {...values}
          formatedValue.images = techStackImage
          console.log("fmtd value", formatedValue)
          const editedStack = await editTechStack(formatedValue);
        } catch (err) {
          console.log("Failed to edit tech stack", err);
        } finally {
          setIsSaving(false);
        }
      }
    },
  });

  // React Drap and Drop
  const fileTypes = ["JPG", "PNG", "SVG"];
  const handleFileChange = async (file: any) => {
    setFile(file);
    console.log("xx file", file);

    try {
      // 1. Delete Existing Image
      await deleteExistingBucketItem(id as string);

      // 2. Upload new Tech Stack Image
      const { data, error } = await supabase.storage
        .from(BUCKET)
        .upload(`tech_stack_items/${id}/${file.name}`, file, { upsert: true });
      if (error) console.log(error, "Error uploading a tech stack image");
    } catch (err) {
      alert(err + "Error uploading tech stack item image");
    } finally {
      setIsImageLoading(true);
      const techStackImageFromBucket = await getTechStackImageFromBucket();
      setTechStackImage(techStackImageFromBucket?.map((image)=>image.name));
      setIsImageLoading(false);
    }
  };
  const deleteExistingBucketItem = async (id: string) => {
    const { data: list } = await supabase.storage
      .from(BUCKET)
      .list(`tech_stack_items/${id}`);
    
      const filesToRemove = list ?list.map((item)=> `tech_stack_items/${id}/${item.name}`):[]

    list?.map(async (item) => {
      const { data, error } = await supabase.storage
        .from(BUCKET)
        .remove(filesToRemove);
    });
  };
  const getTechStackImageFromBucket = async () => {
    const { data, error } = await supabase.storage
      .from("Portfolio_Bucket")
      .list(`tech_stack_items/${id}`);
    if (data) return data;
    if (error) alert("Error getiing tech stack image from storage" + error);
  };

  const removeImageFromList = async (fileName:string)=>{
    console.log("rmm", fileName)
    const {data, error} = await supabase.storage.from(BUCKET).remove([`tech_stack_items/${id}/${fileName}`])
    setTechStackImage([])
  }

  return (
    <>
      <section className="portfolio-details-top">
        <div className="container my-2">
          {/* Check if ID is undefined and render heading */}
          <h2 className="heading-secondary">
            {id ? "Edit Stack Item" : "Create New Stack Item"}
          </h2>
        </div>
        <form className="container" onSubmit={formik.handleSubmit}>
          {/* Label */}
          <div className="form-element">
            <label className="form-title" htmlFor="label">
              Label*
            </label>
            <input
              id="label"
              title="label"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.label}
              className="form-text-area"
            />
            {formik.touched.label && formik.errors.label ? (
              <div className="form-error">{formik.errors.label}</div>
            ) : null}
          </div>
          {/* Tech Stack Type */}
          <div className="form-element">
            <label className="form-title" htmlFor="title">
              Tech Stack Type*
            </label>
            <select
              value={formik.values.type}
              id="type"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="form-select"
            >
              <option value={"TECHSTACK"}>Tech Stack</option>
              <option value={"TOOL"}>Tool</option>
            </select>
            {formik.touched.type && formik.errors.type ? (
              <div className="form-error">{formik.errors.type}</div>
            ) : null}
          </div>

          {/* File Upload */}
            {/* File uploader will be shown after a tech stack item is saved and its id is available */}
          {id &&<div className="form-element">
            <label className="form-title" htmlFor="demoURL">
              Upload SVG
            </label>

            <div className="file-uploader-container">
              <FileUploader
                types={fileTypes}
                name="file"
                handleChange={handleFileChange}
              />
              {/* File Upload Loader */}
              {isImageLoading && <div className="uploaded-files-container"><Loader /></div>}
              {/* Uploaded Images Container */}
              {techStackImage?.length > 0 && !isImageLoading && (
                <div className="uploaded-files-container">
                  <div className="uploaded-file">
                    <div
                      onClick={() => removeImageFromList(techStackImage[0].name)}
                      className="uploaded-file-delete-button"
                    >
                      <CloseCircleOutline
                        style={{ backgroundColor: "#fff", borderRadius:"50%", border:"0.5px solid #000" }}
                        color={"#00000"}
                        height="25x"
                        width="25px"
                      />
                    </div>
                    <Image
                      width={70}
                      height={70}
                      src={`${process.env.NEXT_PUBLIC_CDN_TECH_STACK}/${id}/${techStackImage[0]}`}
                      alt={`${process.env.NEXT_PUBLIC_CDN_TECH_STACK}/${id}/${techStackImage[0]}`}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>}
          <div className="flex gap-1">
            {/* Save Button */}
            <button disabled={isSaving} className="form-button" type="submit">
              {isSaving ? "Saving" : "Save"}
            </button>
            {/* Delete Button */}
            <DeleteButton1 id={id} />
          </div>
        </form>
      </section>
    </>
  );
};

export default TechStackFormGroup;
