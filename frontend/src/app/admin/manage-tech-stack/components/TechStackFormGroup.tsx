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
import {v4 as uuid} from "uuid"

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

  const formik = useFormik({
    initialValues: stackData,
    validationSchema: Yup.object({
      label: Yup.string().required("Label is required"),
      type: Yup.string()
        .oneOf(["TECHSTACK", "TOOL"])
        .required("Type of tech stack is required"),
    }),
    onSubmit: async (values) => {
      if (!id) {
        try {
          setIsSaving(true);
          const newId = uuid()
          // values.id = uuid()
          const formatedData = {...values, id: uuid()}
          console.log("formateed valued", formatedData)
          const newStack = await addTechStack(values);
          router.push(`/admin/manage-tech-stack/${newStack.data.id}`);
        } catch (err) {
          console.log("Failed to add tech stack123", err);
        } finally {
          setIsSaving(false);
        }
      }
      if (id) {
        try {
          setIsSaving(true);
          const editedStack = await editTechStack(values);
        } catch (err) {
          console.log("Failed to edit tech stack", err);
        } finally {
          setIsSaving(false);
        }
      }
    },
  });

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
          <div className="form-element">
            <label className="form-title" htmlFor="demoURL">
              Upload SVG
            </label>
            <FileUploader />
          </div>
          <div className="flex gap-1">
            {/* Save Button */}
            <button disabled={isSaving} className="form-button" type="submit">
              {isSaving ? "Saving" : "Save"}
            </button>
            {/* Delete Button */}
              <DeleteButton1 id={id}/>
          </div>
        </form>
      </section>
    </>
  );
};

export default TechStackFormGroup;
