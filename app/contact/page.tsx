"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState,Suspense  } from "react";
import * as Yup from "yup";

interface initialValuesTypes {
  name: string;
  email: string;
  mobile: string;
  subject: string;
  message: string;
  code: string;
}

const initialValues: initialValuesTypes = {
  name: "",
  email: "",
  mobile: "",
  subject: "",
  message: "",
  code: "",
};

const onSubmit = (values: initialValuesTypes) => {
  console.log(values);
};

const randomGenerator = Math.random().toString(36).slice(8);
import { IoMdRefresh } from "react-icons/io";

function Contact() {
  const [captcha, setCaptcha] = useState(randomGenerator);

  const validationSchema = Yup.object({
    name: Yup.string().required("الزامی!"),
    email: Yup.string().email("ایمیل وارد شده صحیح نمی باشد").required("الزامی!").matches(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
    mobile: Yup.number().required("الزامی!"),
    subject: Yup.string().required("الزامی!"),
    message: Yup.string().required("الزامی!"),
    code: Yup.string()
      .required("الزامی!")
      .min(3, "کد کوتاه است")
      .test('captcha', 'کد امنیتی اشتباه است', (value) => {
        return value === captcha;
      }),
  });

  const handleRefresh = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  }

  return (
    <div className="flex flex-col-reverse  mx-auto my-1 md:flex-row md:justify-around">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="md:w-5/12 px-2 lg:px-0 my-2">
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
            <ErrorMessage
              name="email"
              component="div"
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="mobile"
              className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg"
            >
              موبایل:
            </label>
            <Field
              type="number"
              name="mobile"
              id="mobile"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
            ></Field>
            <ErrorMessage
              name="mobile"
              component="div"
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="subject"
              className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg"
            >
              موضوع:
            </label>
            <Field
              type="text"
              name="subject"
              id="subject"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
            ></Field>
            <ErrorMessage
              name="subject"
              component="div"
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="message"
              className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg"
            >
              متن پیام:
            </label>
            <Field
              type="text"
              name="message"
              id="message"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
            ></Field>
            <ErrorMessage
              name="message"
              component="div"
              className="text-sm bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
            />
          </div>
          <div className="my-3">
            <label
              htmlFor="code"
              className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg"
            >
              کد زیر را وارد کنید:
            </label>
            <div className="flex text-2xl items-center">
              <div className="text-white bg-slate-950 text-center text-lg w-1/5 mb-2 py-1">
                <Suspense fallback={"loading..."}>
                  {captcha}
                </Suspense>
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
      <div className="px-3 lg:px-0">
        <p className="font-bold text-2xl my-2 md:my-5 text-[#9e0a0e]">
          با ما در ارتباط باشید
        </p>
        <div className="flex flex-col md:text-right leading-8 md:text-lg">
          <p>
            آدرس: شیراز , خیابان ملاصدرا , پاساژ ملاصدرا پلاک 49 , فروشگاه آوا
          </p>
          <p>شماره تماس پشتیبانی سایت : 09170264545 </p>
          <p>شماره تماس فروشگاه: 07136474509 - 07136473423</p>
          <p> شماره تماس مدیریت مجموعه : 09123450000 (نگهدار حقیقت)</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
