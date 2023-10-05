"use client";
import { useState, Suspense } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface initialValuesTypes {
  purchaseCode: string;
  code: string;
}
const randomGenerator = Math.random().toString(36).slice(8);
import { IoMdRefresh } from "react-icons/io";

function TrackOrder() {
  const [captcha, setCaptcha] = useState(randomGenerator);

  const validationSchema = Yup.object({
    purchaseCode: Yup.number().required("الزامی"),
    code: Yup.string()
      .required("الزامی!")
      .min(3, "کد کوتاه است")
      .test("captcha", "کد امنیتی اشتباه است", (value) => {
        return value === captcha;
      }),
  })

  const handleRefresh = () => {
    setCaptcha(Math.random().toString(36).slice(8));
  };
  const onSubmit = (values: initialValuesTypes) => {
    console.log(values);
  };
  const initialValues: initialValuesTypes = {
    purchaseCode: "",
    code: "",
  };
  return (
    <div className="sm:w-6/12 md:w-6/12 lg:w-5/12 px-2 sm:px-0 mx-auto">
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
          <div className="my-3">
            <label
              htmlFor="purchaseCode"
              className="block text-gray-500 font-bold md:text-right md:mb-0 pb-1 text-lg "
            >
              کد خرید شما:
            </label>
            <Field
              type="text"
              name="purchaseCode"
              id="purchaseCode"
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9e0a0e]"
            ></Field>
            <ErrorMessage
              name="purchaseCode"
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
          <div className="flex ">
            <button
              type="submit"
              className="w-full bg-[#9e0a0e] py-3 rounded text-white font-bold text-lg my-3 mx-1"
            >
              پیگیری سفارش
            </button>
            <button
              type="submit"
              className="w-full bg-[#9e0a0e] py-3 rounded text-white font-bold text-lg my-3 mx-1"
            >
              اعلام پرداخت
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default TrackOrder;
