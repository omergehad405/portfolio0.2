import React from "react";
import styles from "./Contact.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("This is a required field"),
      email: Yup.string()
        .email("Invalid email address")
        .required("This is a required field"),
      message: Yup.string()
        .min(10, "Must be 10 characters or more")
        .required("This is a required field"),
    }),
    onSubmit: (values, { resetForm }) => {
      const emailURL = `mailto:omergehad593@gmail.com?subject=Data&body=Name: ${values.name}, Message: ${values.message}`;
      window.location.href = emailURL;
      resetForm();
    },
  });

  return (
    <div className={styles.contact_page} id="contact">
      <div className={styles.container}>
        <div className={styles.contact_form}>
          <h1>Leave a message</h1>

          <form onSubmit={formik.handleSubmit}>
            <input
              id="name"
              type="text"
              {...formik.getFieldProps("name")}
              placeholder="Your Name"
              className={
                formik.touched.name && formik.errors.name
                  ? styles.inputError
                  : ""
              }
            />
            {formik.touched.name && formik.errors.name ? (
              <div className={styles.error_msg}>{formik.errors.name}</div>
            ) : null}

            <input
              id="email"
              type="email"
              placeholder="Your Email Address"
              {...formik.getFieldProps("email")}
              className={
                formik.touched.email && formik.errors.email
                  ? styles.inputError
                  : ""
              }
            />
            {formik.touched.email && formik.errors.email ? (
              <div className={styles.error_msg}>{formik.errors.email}</div>
            ) : null}

            <textarea
              id="message"
              type="text"
              placeholder="Your message"
              {...formik.getFieldProps("message")}
              className={
                formik.touched.message && formik.errors.message
                  ? styles.inputError
                  : ""
              }
            />
            {formik.touched.message && formik.errors.message ? (
              <div className={styles.error_msg}>{formik.errors.message}</div>
            ) : null}

            <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
              Send via Gmail
            </button>
          </form>
        </div>

        <div className={styles.contact_info}>
          <h1>Feel free to contact me anytime</h1>

          <div className={styles.links}>
            <div className={styles.link}>
              <h6>Email</h6>
              <a href="mailto:omergehad593@gmail.com">omergehad593@gmail.com</a>
            </div>
            <div className={styles.link}>
              <h6>Phone</h6>
              <a href="tel:01061989116">+20 01061989116</a>
            </div>
            <div className={styles.link}>
              <h6>Follow</h6>
              <div className={styles.social_links}>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/omar-gehad-214302291/"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/omergehad405"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  target="_blank"
                  href="https://www.upwork.com/freelancers/~0131b5cb24cec43395?mp_source=share"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-upwork"></i>
                </a>
                <a
                  target="_blank"
                  href="https://khamsat.com/user/omer_gehad"
                  rel="noopener noreferrer"
                >
                  <img src="./khamsat.png" alt="Khamsat_link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
