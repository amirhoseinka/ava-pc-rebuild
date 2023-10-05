"use client";
import React from "react";
import Image from "next/image";
import logo from "@/public/pictures/logo.png";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface valuesType {
  name: string;
  password: string;
}

function LogIn() {
  const initialValues: valuesType = {
    name: "",
    password: "",
  };
  const onSubmit = (values: valuesType) => {
    console.log(values);
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("الزامی"),
    password: Yup.string()
      .required("الزامی")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{8,})/,
        "رمز باید بیشتر از 8 تا کاراکتر باشد,رمز باید شامل حداقل یک حرف بزرگ باشد, رمز حداقل باید شامل یک حرف کوچک باشد, رمز حداقل باید شامل یک عدد باشد"
      ),
  });
  return (
    <div className="flex h-screen">
      <div className="sm:w-7/12 md:border md:w-8/12 px-2 lg:w-6/12 xl:w-4/12 w-full rounded md:p-10 m-auto">
        <Link href={"/"} prefetch={true}>
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="mx-auto"
          />
        </Link>
        <p className="text-xl font-bold my-3">ورود | ثبت نام</p>
        <p className="my-2 text-sm md:text-base">
          برای ورود نام کاربری,ایمیل یا شماره موبایل خود را وارد کنید.
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <Field
              type="text"
              id="name"
              name="name"
              placeHolder="فقط استفاده از حروف انگلیسی مجاز است"
              className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
            ></Field>
            <ErrorMessage
              name="name"
              component="div"
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
            />
            <Field
              type="password"
              id="password"
              name="password"
              placeHolder="رمز عبور"
              className="mt-2 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
            ></Field>
            <ErrorMessage
              name="password"
              component="div"
              className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
            />
            <button
              type="submit"
              className="mt-2 bg-[#9e0a0e] font-bold text-white w-full rounded py-2"
            >
              ورود
            </button>
            <div className="flex justify-between mt-1 mb-3">
              <div className="flex">
                <input type="checkbox" id="loginCheckbox" className="me-1" />
                <label htmlFor="loginCheckbox">من را به خاطر بسپار</label>
              </div>
              <p>بازیابی رمز عبور</p>
            </div>
            <Link href="/register" prefetch={true} className="text-blue-500">
              ساخت حساب کاربری جدید
            </Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default LogIn;
