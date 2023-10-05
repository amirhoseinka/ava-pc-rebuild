"use client";
import Image from "next/image";
import logo from "@/public/pictures/logo.png";

import { BsSearch } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBasketFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillHome } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { BiChevronsLeft } from "react-icons/bi";
import { BiChevronsDown } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import { BsPersonAdd } from "react-icons/bs";
import { MdFindInPage } from "react-icons/md";

import { useState } from "react";
import Link from "next/link";
const items = [
  {
    label: "لوازم جانبی کامپیوت",
    onSelect: () => console.log("Option 1 selected"),
    className: "text-2xl",
  },
  {
    label: "Option 2",
    items: [
      {
        label: "Option 2.1",
        onSelect: () => console.log("Option 2.1 selected"),
      },
      {
        label: "Option 2.2",
        onSelect: () => console.log("Option 2.2 selected"),
      },
    ],
  },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  return (
    <>
      <header className="shadow sticky top-0 bg-white z-10 ">
        <div className="lg:container mx-4 lg:mx-auto py-4 flex justify-between ">
          <div className="flex lg:w-8/12 w-full">
            <Link href="/" prefetch={true}>
              <Image
                src={logo}
                alt="logo"
                className="flex m-auto lg:m-0 sm:w-14 sm:h-14 w-10 h-10"
              />
            </Link>
            <div className="flex flex-row-reverse rounded-xl bg-gray-100 lg:w-9/12 w-full h-11 my-auto ms-2 lg:ms-5">
              <input
                type="search"
                className="bg-gray-100 px-2 rounded-l-xl w-full border-gray-200 border-r-2 focus:outline-none"
                placeholder="جست و جوی محصول, دسته, برند..."
                aria-label="Search"
                aria-describedby="button-addon1"
              />
              <button
                className="flex flex-row-reverse"
                type="button"
                id="button-addon1"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <BsSearch className="md:w-12 w-8 my-auto text-gray-400 " />
              </button>
            </div>
          </div>

          <div className="relative  text-left lg:flex font-bold hidden">
            <div
              className="rounded-xl bg-gray-100 px-15 flex my-auto px-3 py-2 text-gray-500 mx-2 cursor-pointer"
              onClick={() => setProfileIsOpen(!profileIsOpen)}
            >
              <BsFillPersonFill className="flex my-auto me-1 text-gray-500 text-lg " />
              <p>پروفایل</p>
            </div>

            <div
              className={`text-right absolute  left-28 z-10 mt-[50px] w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                profileIsOpen === true ? "block" : "hidden"
              }`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
            >
              <div className="py-1">
                <Link
                  href={"/login"}
                  prefetch={true}
                  className="text-gray-600 flex px-4 py-2 hover:bg-gray-200"
                  role="menuitem"
                  id="menu-item-0"
                >
                  <FiLogIn className="flex my-auto me-1" />
                  ورود
                </Link>
                <hr />
                <Link
                  href="/register"
                  prefetch={true}
                  className="text-gray-600 flex px-4 py-2 hover:bg-gray-200"
                  role="menuitem"
                  id="menu-item-2"
                >
                  <BsPersonAdd className="flex my-auto me-1" />
                  ثبت نام
                </Link>
                <hr />
                <Link
                  href="/track-order"
                  prefetch={true}
                  className="text-gray-600 flex px-4 py-2 hover:bg-gray-200"
                  role="menuitem"
                  id="menu-item-2"
                >
                  <MdFindInPage className="flex my-auto me-1" />
                  پیگیری سفارش
                </Link>
              </div>
            </div>
            <div className="rounded-xl bg-gray-100 px-15 flex my-auto px-3 py-2 text-gray-500 ">
              <BsFillBasketFill className="flex my-auto mx-1 text-gray-500 text-md" />
              <p className=" mx-1">0</p>
              <p className=" mx-1">کالا</p>
              <BsChevronDown className="flex my-auto ms-1 text-gray-500 text-sm" />
            </div>
          </div>
        </div>

        <ul className="relative flex space-x-4 lg:container lg:mx-auto mx-4 lg:flex text-lg font-medium hidden">
          <li
            className="relative group px-3 pb-3 hover:text-[#9e0a0e] font-bold"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <a href="#" className="flex">
              <RxHamburgerMenu className="me-2 my-auto text-[#9e0a0e] font-bold" />
              دسته بندی کالاها
            </a>
          </li>
          <li className="px-3 hover:text-[#9e0a0e] ">
            <Link href="/contact" prefetch={true}>
              تماس با ما
            </Link>
          </li>
          <li className="px-3 hover:text-[#9e0a0e]">
            <Link href="/track-order" prefetch={true}>
              پیگیری سفارش
            </Link>
          </li>
          <li className="px-3 hover:text-[#9e0a0e]">
            <Link href="/about" prefetch={true}>
              درباره ما
            </Link>
          </li>
          <li className="px-3 hover:text-[#9e0a0e]">
            <Link href="/avaplus" prefetch={true}>
              آوا پلاس
            </Link>
          </li>
        </ul>
        <hr />
        {isOpen ? (
          <div
            className="bg-white absolute w-full rounded-b-lg shadow-xl"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <ul className="leading-10 p-3 lg:container w-[100%] mx-auto text-lg font-medium">
              <li className="group relative hover:bg-gray-200 w-2/12 px-2 ">
                <div className="flex justify-between">
                  لوازم جانبی کامپیوتر
                  <BiChevronsLeft className="my-auto flex text-[#9e0a0e]" />
                </div>
                <ul
                  className="invisible group-hover:visible fixed grid grid-cols-2 h-80 mr-[160px] xl:mr-[200px] -mt-10  w-6/12 h-32"
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  <li className="mr-5 flex font-bold">
                    ماوس و کیبورد
                    <BiChevronsDown className="flex my-auto text-[#9e0a0e]" />
                  </li>
                  <li className="mr-5 font-bold">اسپیکر</li>
                  <li className="mr-5">ماوس</li>
                  <li className="mr-5 font-bold">هدفون, هدست و هندزفری</li>
                  <li className="mr-5">کیبورد</li>
                  <li className="mr-5 font-bold">ماوس پد</li>
                  <li className="mr-5 font-bold">گیم پد</li>
                  <li className="mr-5 font-bold">وب کم</li>
                  <li className="mr-5 font-bold">پاور</li>
                  <li className="mr-5 font-bold">هاب usb</li>
                  <li className="mr-5 font-bold">باطری</li>
                  <li className="mr-5 font-bold">
                    محافظ برق کامپیوتر, رابط برق
                  </li>
                  <li className="mr-5 font-bold">زیر مانیتور و زیر کیسی</li>
                </ul>
              </li>
              <li className="group relative hover:bg-gray-200 w-2/12 px-2">
                <div className="flex justify-between">
                  لوازم جانبی لپ تاپ
                  <BiChevronsLeft className="my-auto flex text-[#9e0a0e]" />
                </div>
                <ul className="invisible group-hover:visible absolute mr-[160px] xl:mr-[200px] -mt-20 leading-8 w-full">
                  <li className="mr-5 font-bold my-1">کیف لپ تاپ</li>
                  <li className="mr-5 font-bold my-1">خنک کننده لپ تاپ</li>
                  <li className="mr-5 font-bold my-1">تمیز کننده لپ تاپ</li>
                  <li className="mr-5 font-bold my-1">درایو نوری اکسترنال</li>
                  <li className="mr-5 font-bold my-1">برچسب کیبورد</li>
                </ul>
              </li>
              <li className="group relative hover:bg-gray-200 w-2/12 px-2">
                <div className="flex justify-between">
                  لوازم جانبی موبایل
                  <BiChevronsLeft className="my-auto flex text-[#9e0a0e]" />
                </div>
                <ul className="invisible group-hover:visible absolute mr-[160px] xl:mr-[200px] -mt-28 leading-8 w-full">
                  <li className="mr-5 font-bold my-1"> اسپیکر قابل حمل </li>
                  <li className="mr-5 font-bold my-1">هندزفری</li>
                  <li className="mr-5 font-bold my-1">کابل و شارژر</li>
                  <li className="mr-5 font-bold my-1">نگهدارنده موبایل</li>
                  <li className="mr-5 font-bold my-1">پاور بانک</li>
                  <li className="mr-5 font-bold my-1">کارت حافظه</li>
                </ul>
              </li>
              <li className="group relative hover:bg-gray-200 w-2/12 px-2 ">
                <div className="flex justify-between">
                  محصولات گیمینگ
                  <BiChevronsLeft className="my-auto flex text-[#9e0a0e]" />
                </div>
                <ul className="invisible group-hover:visible absolute mr-[160px] xl:mr-[200px] -mt-40 leading-8 w-full h-56">
                  <li className="mr-5 font-bold my-1">ماوس و کیبورد گیمینگ</li>
                  <li className="mr-5 font-bold my-1">هدست و هدفون گیمینگ</li>
                  <li className="mr-5 font-bold my-1">ماوس پد گیمینگ</li>
                  <li className="mr-5 font-bold my-1"> میکروفون گیمینگ</li>
                  <li className="mr-5 font-bold my-1"> لوازم جانبی گیمینگ</li>
                </ul>
              </li>
              <li className="group relative hover:bg-gray-200 w-2/12 px-2">
                <div className="flex justify-between">
                  هارد و حافظه
                  <BiChevronsLeft className="my-auto flex text-[#9e0a0e]" />
                </div>
                <ul className="invisible group-hover:visible absolute mr-[160px] xl:mr-[200px] -mt-48 leading-8 w-full h-64">
                  <li className="mr-5 font-bold my-1">حافظه ssd</li>
                  <li className="mr-5 font-bold my-1">هارد اکسترنال</li>
                  <li className="mr-5 font-bold my-1">فلش مموری</li>
                  <li className="mr-5 font-bold my-1"> مموری کارت</li>
                  <li className="mr-5 font-bold my-1"> باکس هارد</li>
                  <li className="mr-5 font-bold my-1">کیف هارد</li>
                </ul>
              </li>
              <li className="group relative hover:bg-gray-200 w-2/12 px-2">
                <div className="flex justify-between">
                  لوازم جانبی شبکه
                  <BiChevronsLeft className="my-auto flex text-[#9e0a0e]" />
                </div>
                <ul className="invisible group-hover:visible absolute mr-[160px] xl:mr-[200px] -mt-60 leading-8 w-full h-72">
                  <li className="mr-5 font-bold my-1"> مودم adsl, روتر</li>
                  <li className="mr-5 font-bold my-1">مودم lte , 4g</li>
                  <li className="mr-5 font-bold my-1">کارت شبکه</li>
                  <li className="mr-5 font-bold my-1">سوئیچ شبکه</li>
                  <li className="mr-5 font-bold my-1"> کارت شبکه</li>
                  <li className="mr-5 font-bold my-1">سایر تجهیزات شبکه</li>
                </ul>
              </li>
              <li className="group relative hover:bg-gray-200 w-2/12 px-2">
                <div className="flex justify-between">
                  تبدیل, کابل و چنبر
                  <BiChevronsLeft className="my-auto flex text-[#9e0a0e]" />
                </div>
                <ul className="invisible group-hover:visible fixed grid grid-cols-2 h-80 mr-[200px] -mt-72 leading-8 w-6/12 h-32">
                  <li className="mr-5 font-bold flex">
                    اسپلیتر{" "}
                    <BiChevronsDown className="flex my-auto text-[#9e0a0e]" />
                  </li>
                  <li className="mr-5 text-sm">اسپلیتر VGA</li>
                  <li className="mr-5 text-sm">کابل صدا</li>

                  <li className="mr-5 text-sm">کابل شارژر </li>
                  <li className="mr-5 text-sm">اسپلیتر HDMI</li>
                  <li className="mr-5 text-sm">کابل برق</li>

                  <li className="mr-5 font-bold flex">
                    سوئیچ{" "}
                    <BiChevronsDown className="flex my-auto text-[#9e0a0e]" />
                  </li>
                  <li className="mr-5 text-sm">کابل HDMI</li>
                  <li className="mr-5 text-sm">سوئیچ HDMI </li>
                  <li className="mr-5 text-sm">کابل VGA</li>
                  <li className="mr-5 text-sm">سوئیچ VGA</li>
                  <li className="mr-5 text-sm">کابل پرینتر</li>
                  <li className="mr-5 text-sm ">کی وی ام</li>

                  <li className="mr-5 text-sm">کابل هارد</li>
                  <li className="mr-5 font-bold flex">
                    کابل{" "}
                    <BiChevronsDown className="flex my-auto text-[#9e0a0e]" />
                  </li>
                  <li className="mr-5 text-sm">افزایش طول</li>
                  <li className="mr-5 text-sm">سایر کابل ها</li>
                  <li className="mr-5 font-bold">تبدیل</li>
                </ul>
              </li>
              <li className="hover:bg-gray-200 w-2/12 px-2">آوا پلاس</li>
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </header>

      {/* responsive design */}
      <ul className="lg:hidden bg-white z-10 flex justify-around w-full fixed bottom-0 border-gray border-t-2 text-gray-500 p-3">
        <li className="flex flex-col px-3 ">
          <Link href="/" prefetch={true}>
            <AiFillHome className="flex mx-auto"/>
            خانه
          </Link>
        </li>
        <li className="flex flex-col px-3 items-center">
          <BiCategoryAlt />
          دسته بندی
        </li>
        <li className="flex flex-col px-3 items-center">
          <BsFillBasketFill /> سبد خرید
        </li>
        <li className="flex flex-col px-3 items-center">
          <Link href="/login" prefetch={true}>
            <BsFillPersonFill className="flex mx-auto"/>
            پروفایل
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
