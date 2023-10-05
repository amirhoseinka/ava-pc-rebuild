import Image from "next/image";
import support from "@/public/pictures/footer/support.svg";
import return1 from "@/public/pictures/footer/return1.svg";
import car from "@/public/pictures/footer/car.svg";
import original from "@/public/pictures/footer/original.svg";

import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="px-2">
        <div className="flex flex-col md:flex-row justify-around container mx-auto bg-gray-200 mt-8 rounded-2xl">
          <ul className="leading-8 p-3 font-bold">
            <h1>پشتیبانی</h1>
            <li>شماره تماس : پشتیبانی: 09170264545 مدیریت: 09123450000</li>
            <li>شماره تماس: 07136473423-07136474509</li>
            <li>
              نشانی: شیراز:خیابان ملاصدرا-پاساژ ملاصدرا-پلاک 49-کامپیوتر آوا
            </li>
          </ul>
          <div className="sm:flex sm:justify-between grid grid-cols-2 md:w-6/12 md:my-auto p-4">
            <div className="flex flex-col p-2">
              <Image src={support} alt="support" className="mx-auto" />
              <p className="text-center text-sm md:text-md">پشتیبانی تلفنی</p>
            </div>
            <div className="flex flex-col p-2">
              <Image src={return1} alt="support" className="mx-auto" />
              <p className="text-center text-sm md:text-md">
                7 روز بازگشت کالا
              </p>
            </div>
            <div className="flex flex-col p-2">
              <Image src={car} alt="support" className="mx-auto" />
              <p className="text-center text-sm md:text-md"> ارسال سریع کالا</p>
            </div>
            <div className="flex flex-col p-2">
              <Image src={original} alt="support" className="mx-auto" />
              <p className="text-center text-sm md:text-md"> اصالت کالا</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="text-center my-5">
            <div className="flex justify-center my-2">
              <FaTwitter className="mx-2" />
              <FaInstagram className="mx-2" />
              <FaTelegramPlane className="mx-2" />
            </div>
            <h1 className="text-gray-600 font-bold">با ما همراه باشید</h1>
          </div>
          <div className="lg:w-6/12 mb-4">
            <p className="font-bold text-lg mb-1">
              فروشگاه اینترنتی آوا ، نتیجه 20 سال اعتماد شما
            </p>
            
            <p className="text-sm text-gray-500 ">
              فروشگاه آوا با بیش از 20 سال سابقه حضور در حوزه ای تی. ضمن ارایه
              کالاهای اصلی و با کیفیت از این پس جهت رفاه حال مشتریان گرامی به
              صورت فروش آنلاین نیز آماده خدمت رسانی می باشد
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
