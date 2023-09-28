"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState, useEffect } from "react";
import { FileUploader } from "react-drag-drop-files";
import { IOption } from "@/app/libs/types";

interface IProps {
  stackData: IOption;
  id?: string | undefined;
}

const TechStackFormGroup = ({ stackData, id }: IProps) => {
  // State Management
  const [isSaving, setIsSaving] = useState(false);
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
      alert(JSON.stringify(values));
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

          <button disabled={isSaving} className="form-button" type="submit">
            {isSaving ? "Saving" : "Submit"}
          </button>
        </form>
      </section>
    </>
  );
};

export default TechStackFormGroup;
