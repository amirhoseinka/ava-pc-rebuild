"use client";
import React, { useState, Suspense } from "react";
import Image from "next/image";
import logo from "@/public/pictures/logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const randomGenerator = Math.random().toString(36).slice(8);
import { IoMdRefresh } from "react-icons/io";
import Link from "next/link";

interface valuesType {
  name: string;
  nameAndLastName: string;
  phone: string;
  email: string;
  password: string;
  reWritepassword: string;
  gender: string;
  birthday: string;
  city: string;
  address: string;
  postalCode: string;
  code: string;
}

function Register() {
  const [captcha, setCaptcha] = useState(randomGenerator);
  const initialValues: valuesType = {
    name: "",
    nameAndLastName: "",
    phone: "",
    email: "",
    password: "",
    reWritepassword: "",
    gender: "",
    birthday: "",
    city: "",
    address: "",
    postalCode: "",
    code: "",
  };
  const onSubmit = (values: valuesType) => {
    console.log(values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("الزامی"),
    nameAndLastName: Yup.string().required("الزامی"),
    email: Yup.string()
      .email("ایمیل وارد شده صحیح نمی باشد")
      .required("الزامی!")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      ),
    phone: Yup.string().matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "شماره وارد شده معتبر نیست"
    ),
    password: Yup.string()
      .required("الزامی")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{8,})/,
        "رمز باید بیشتر از 8 تا کاراکتر باشد,رمز باید شامل حداقل یک حرف بزرگ باشد, رمز حداقل باید شامل یک حرف کوچک باشد, رمز حداقل باید شامل یک عدد باشد"
      ),
    reWritepassword: Yup.string()
      .required("الزامی")
      .oneOf([Yup.ref("password")], "پسوورد ها یکی نیستند"),
    gender: Yup.string().required("لطفا یک گزینه را انتخاب کنید"),
    birthday: Yup.string(),
    city: Yup.string(),
    address: Yup.string(),
    PostalCode: Yup.string(),
    code: Yup.string()
      .required("الزامی!")
      .min(3, "کد کوتاه است")
      .test("captcha", "کد امنیتی اشتباه است", (value) => {
        return value === captcha;
      }),
  });

  const handleRefresh = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };

  return (
    <div className="flex h-screen">
      <div className="sm:w-7/12 md:border md:w-8/12 px-2 lg:w-6/12 xl:w-4/12 w-full rounded md:p-10 m-auto overflow-y-auto h-[600px]">
        <Link href={"/"} prefetch={true}>
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="mx-auto my-3"
          />
        </Link>
        <p className="text-xl font-bold my-3">ثبت نام</p>
        <Link href="/login" prefetch={true} className="text-blue-500 ms-1">
          اگه قبلا ثبت نام کردی برای ورود اینجارو کلیک کن
        </Link>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="my-3">
              <label
                htmlFor="name"
                className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg "
              >
                نام کاربری:
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                placeHolder="فقط استفاده از حروف انگلیسی مجاز است"
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
                htmlFor="nameAndLastName"
                className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg "
              >
                نام و نام خانوادگی:
              </label>
              <Field
                type="text"
                name="nameAndLastName"
                id="nameAndLastName"
                placeHolder="لطفا نام و نام خانوادگی را بصورت کامل و به فارسی وارد کنید."
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
              ></Field>
              <ErrorMessage
                name="nameAndLastName"
                component="div"
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
              />
            </div>
            <div className="my-3">
              <label
                htmlFor="phone"
                className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg"
              >
                موبایل:
              </label>
              <Field
                type="number"
                name="phone"
                id="phone"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
              ></Field>
              <ErrorMessage
                name="phone"
                component="div"
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
              />
            </div>
            <div className="my-3">
              <label
                htmlFor="email"
                className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg"
              >
                آدرس ایمیل:
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
                htmlFor="password"
                className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg "
              >
                کلمه عبور:
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
              ></Field>
              <ErrorMessage
                name="password"
                component="div"
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold text-sm"
              />
            </div>
            <div className="my-3">
              <label
                htmlFor="reWritepassword"
                className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg "
              >
                تکرار کلمه عبور:
              </label>
              <Field
                type="password"
                name="reWritepassword"
                id="reWritepassword"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
              ></Field>
              <ErrorMessage
                name="reWritepassword"
                component="div"
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
              />
            </div>
            <div className="my-3">
              <label
                htmlFor="gender"
                className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg "
              >
                جنسیت :
              </label>
              <div className="flex justify-around">
                <div>
                  <input type="radio" id="gender" name="gender" />
                  <label htmlFor="huey" className="ms-1">
                    زن
                  </label>
                </div>
                <div>
                  <input type="radio" id="dewey" name="gender" value="gender" />
                  <label htmlFor="gender" className="ms-1">
                    مرد
                  </label>
                </div>
              </div>

              <ErrorMessage
                name="gender"
                component="div"
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
              />
            </div>
            <div className="my-3">
              <label
                htmlFor="email"
                className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg"
              >
                تاریخ تولد :
              </label>
              <div className="flex justify-around">
                <Field
                  type="number"
                  name="birthday"
                  id="birthday"
                  placeHolder="روز"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
                ></Field>
                <Field
                  type="number"
                  name="birthday"
                  id="birthday"
                  placeHolder="ماه"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
                ></Field>
                <Field
                  type="number"
                  name="birthday"
                  id="birthday"
                  placeHolder="سال"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
                ></Field>
              </div>
            </div>
            <div className="my-3">
              <label
                htmlFor="address"
                className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg "
              >
                نشانی:
              </label>
              <Field
                type="text"
                name="address"
                id="address"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
              ></Field>
              <ErrorMessage
                name="address"
                component="div"
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
              />
            </div>
            <div className="my-3">
              <label
                htmlFor="PostalCode"
                className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg "
              >
                کد پستی:
              </label>
              <Field
                type="text"
                name="PostalCode"
                id="PostalCode"
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
              ></Field>
              <ErrorMessage
                name="PostalCode"
                component="div"
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded relative rtl my-2 font-bold"
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
              className="w-full bg-[#9e0a0e] py-3 rounded text-white font-bold text-lg my-3"
            >
              تکمیل ثبت نام
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Register;
