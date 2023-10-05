"use client";
import React, { useState, Suspense } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const randomGenerator = Math.random().toString(36).slice(8);
import { IoMdRefresh } from "react-icons/io";

interface initialValuesTypes {
  name: string;
  email: string;
  website: string;
  message: string;
  code: string;
}

function About() {
  const [captcha, setCaptcha] = useState(randomGenerator);

  const handleRefresh = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };

  const onSubmit = (values: initialValuesTypes) => {
    console.log(values);
  };

  const initialValues = {
    name: "",
    email: "",
    website: "",
    message: "",
    code: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("الزامی"),
    email: Yup.string()
      .email("ایمیل وارد شده صحیح نمی باشد")
      .required("الزامی!")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ),
    website: Yup.string().matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "آدرس سایت اشتباه"
    ),
    message: Yup.string().required("الزامی!"),
    code: Yup.string()
      .required("الزامی!")
      .min(3, "کد کوتاه است")
      .test("captcha", "کد امنیتی اشتباه است", (value) => {
        return value === captcha;
      }),
  });
  return (
    <div className="flex flex-col-reverse mx-auto my-1 md:flex-row md:justify-around">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="md:w-5/12 px-2 lg:px-0 my-2">
          <p className="text-lg font-bold">ارسال نظر</p>
          <div className="my-3">
            <label
              htmlFor="name"
              className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg "
            >
              نام:
            </label>
            <Field
              type="text"
              name="name"
              id="name"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
            ></Field>
            <p className="text-sm">- لطفا فارسی بنویسید.</p>
            <ErrorMessage
              name="name"
              component="div"
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="email"
              className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg"
            >
              ایمیل:
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
            ></Field>
            <p className="text-sm">- نشانی ایمیل شما منتشر نخواهد شد.</p>
            <ErrorMessage
              name="email"
              component="div"
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="website"
              className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg"
            >
              وب سایت:
            </label>
            <Field
              type="website"
              name="website"
              id="website"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
            ></Field>
            <ErrorMessage
              name="website"
              component="div"
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="message"
              className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg"
            >
              پیغام:
            </label>
            <Field
              type="text"
              name="message"
              id="message"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
            ></Field>
            <p className="text-sm">
              - لطفا دیدگاهتان تا حد امکان مربوط به مطلب باشد.
            </p>
            <p className="text-sm">
              - نظرات شما بعد از تایید مدیریت منتشر خواهد شد
            </p>

            <ErrorMessage
              name="message"
              component="div"
              className="text-sm bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="name"
              className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg"
            >
              کد زیر را وارد کنید:
            </label>
            <div className="flex text-2xl items-center">
              <div className="text-white bg-slate-950 text-center text-lg w-1/5 mb-2 py-1">
                <Suspense fallback={"loading..."}>{captcha}</Suspense>
              </div>
              <IoMdRefresh
                className="cursor-pointer"
                onClick={() => handleRefresh()}
              />
            </div>
            <Field
              type="text"
              name="code"
              id="code"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
            ></Field>
            <ErrorMessage
              name="code"
              component="div"
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-lime-600 py-3 rounded text-white font-bold text-lg my-3"
          >
            ارسال
          </button>
        </Form>
      </Formik>
      <div className="w-full px-2 lg:px-0 md:w-4/12">
        <p className="text-lg font-bold my-3">درباره ما</p>
        <p className="text-lg">
          فروشگاه آوا با بیش از 20 سال سابقه در زمینه کامپیوتر و الکترونیک و
          نمایندگی برند های ایفورتک , جنیوس , رپو , لاجیتک , ریزر , ایکس پی
          پروداکت ,کی نت , جهت رفاه حال مشتریان عزیز به صورت آنلاین نیز آماده
          ارائه خدمات میباشد.
        </p>
      </div>
    </div>
  );
}

export default About;
