"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormGroup() {
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
      techStackItems: Yup.array().min(1, "At least one tech stack item should be selected").required("Required")

    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <section className="">
      <h1 className="heading-tertiary">Create new project</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Title */}
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            title="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            type="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </div>
        
            <div>
            {formik.touched.techStackItems && formik.errors.techStackItems ? (
            <div>{formik.errors.techStackItems}</div>
          ) : null}
            </div>
        

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
