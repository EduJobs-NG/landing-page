import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormError from "./FormError";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
});
const onSubmit = async (values) => {
  console.log(values);
  const response = await axios.post(`https://edujobsng.herokuapp.com/api/v1/email/newsletters/`)
  .catch( err => toast.error(err.message) )

  if (response){
    console.log(response)
    toast.success('Email saved successfully.')
  }
};

export const Email = () => {
  return (
    <section className="containe mx-auto max-w-[600px] mt-[1rem]">
      <ToastContainer />

      <Formik
        initialValues={{ email: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="block md:hidden">
            <Field
              id="email"
              type="email"
              className="border p-2.5 block w-full  border-solid  border-[#808080] rounded-lg outline-none"
              placeholder="Email address"
              name="email"
            ></Field>
            <div className="flex justify-center items-center ">
            <button
              className="mt-[1rem] bg-[#02378B] rounded-lg  text-white px-[2rem] py-[0.5rem]"
              type="submit"
            >
              SUBMIT
            </button>
            </div>
            <ErrorMessage component={FormError} name="email" />
          </div>


          <div className=" hidden md:flex">
            <Field
              id="email"
              type="email"
              className="border p-2.5 block w-full  border-solid rounded-r-none border-[#808080] rounded-lg outline-none"
              placeholder="Email address"
              name="email"
            ></Field>

            <button
              className="bg-[#02378B] rounded-lg rounded-l-none text-white px-[2rem] py-[0.5rem]"
              type="submit"
            >
              SUBMIT
            </button>
            <ErrorMessage component={FormError} name="email" />
          </div>
          
        </Form>
      </Formik>
    </section>
  );
};
