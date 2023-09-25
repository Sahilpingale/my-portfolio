"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import addProject from "@/app/libs/addProject";

export default function FormGroup() {

  // State Management
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      demoURL: "",
      githubURL: "",
      testimonial: "",
      purposeAndGoal: "",
      techStackItems: [],
      tools: [],
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      description: Yup.string().required("Description is required"),
      demoURL: Yup.string(),
      githubURL: Yup.string(),
      testimonial: Yup.string(),
      purposeAndGoal: Yup.string(),
      techStackItems: Yup.array()
        .min(1, "At least one tech stack item should be selected")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setIsSaving(true)
      try{
        const res = await addProject(values)
        console.log(res, "resss")
      }catch(err){}finally{
        setIsSaving(false)
      }
    },
  });

  return (
    <section className="portfolio-details-top">
      <div className="mx-5 my-3 mb-4">
        <h2 className="heading-secondary">Create new project</h2>
      </div>
      <form className="container" onSubmit={formik.handleSubmit}>
        {/* Title */}
        <div className="form-element">
          <label className="form-title" htmlFor="title">
            Title*
          </label>
          <input
            id="title"
            title="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="form-text-area"
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="form-error">{formik.errors.title}</div>
          ) : null}
        </div>

        {/* Description */}
        <div className="form-element">
          <label className="form-title" htmlFor="description">
            Description*
          </label>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            className="form-text-area"
            rows={5}
            cols={10}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="form-error">{formik.errors.description}</div>
          ) : null}
        </div>

        {/* Purpose and Goal */}
        <div className="form-element">
          <label className="form-title" htmlFor="purposeAndGoal">
            Purpose and goal
          </label>
          <textarea
            id="purposeAndGoal"
            name="purposeAndGoal"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.purposeAndGoal}
            className="form-text-area"
            rows={5}
            cols={10}
          />
          {formik.touched.purposeAndGoal && formik.errors.purposeAndGoal ? (
            <div className="form-error">{formik.errors.purposeAndGoal}</div>
          ) : null}
        </div>

        {/* Testimonial */}
        <div className="form-element">
          <label className="form-title" htmlFor="testimonial">
            Testimonial
          </label>
          <textarea
            id="testimonial"
            name="testimonial"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.testimonial}
            className="form-text-area"
            rows={5}
            cols={10}
          />
          {formik.touched.testimonial && formik.errors.testimonial ? (
            <div className="form-error">{formik.errors.testimonial}</div>
          ) : null}
        </div>

        {/* Tech stack selection */}
        <div className="form-element">
          <label className="form-title">Tech-Stack Items</label>
          <select
            multiple
            name="techStackItems"
            value={formik.values.techStackItems}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-text-area"
          >
            <option value="123">123</option>
            <option value="456">456</option>
            <option value="789">789</option>
          </select>
          {formik.touched.techStackItems && formik.errors.techStackItems ? (
            <div className="form-error">{formik.errors.techStackItems}</div>
          ) : null}
        </div>

        {/* Tools selection */}
        <div className="form-element">
          <label className="form-title">Tools</label>
          <select
            multiple
            name="tools"
            value={formik.values.tools}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="form-text-area"
          >
            <option value="123">123</option>
            <option value="456">456</option>
            <option value="789">789</option>
          </select>
          {formik.touched.tools && formik.errors.tools ? (
            <div className="form-error">{formik.errors.tools}</div>
          ) : null}
        </div>

        {/* Github URL */}
        <div className="form-element">
          <label className="form-title" htmlFor="githubURL">
            GitHub URL
          </label>
          <input
            id="githubURL"
            title="githubURL"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.githubURL}
            className="form-text-area"
          />
          {formik.touched.githubURL && formik.errors.githubURL ? (
            <div className="form-error">{formik.errors.githubURL}</div>
          ) : null}
        </div>

        {/* Demo URL */}
        <div className="form-element">
          <label className="form-title" htmlFor="demoURL">
            Demo URL
          </label>
          <input
            id="demoURL"
            title="demoURL"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.demoURL}
            className="form-text-area"
          />
          {formik.touched.demoURL && formik.errors.demoURL ? (
            <div className="form-error">{formik.errors.demoURL}</div>
          ) : null}
        </div>

        <button disabled={isSaving} className="form-button" type="submit">
          {isSaving? "Saving": "Submit"}
        </button>
      </form>
    </section>
  );
}
