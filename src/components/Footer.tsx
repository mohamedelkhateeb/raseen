import Plastore from "../assets/playstore.svg fill.svg";
import AppStore from "../assets/Item → Link → appstore.svg.svg";
import React from "react";
import Logo from "../assets/Group (1).svg";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F8F8] text-center md:text-right p-6 md:p-12 border-t">
      <div className="flex gap-20">
        <div className="text-center sm:text-left">
          <img
            src={Logo}
            alt="RSEEN Logo"
            className="w-24 mx-auto sm:mx-0 mb-4"
          />
          <p className="text-black  font-medium mb-4 text-center md:text-start">
            موقع يوفر لك كل ما تحتاجه لمساحتك من مقاولات .. تشطيب .. وحتى
            الديكور الداخلي
          </p>
          <div className="flex justify-center sm:justify-start gap-4">
            <img src={Plastore} alt="Google Play" className="w-32" />
            <img src={AppStore} alt="App Store" className="w-32" />
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info and App Store Links */}

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">روابط هامة</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className=" hover:text-primary">
                  الرئيسية
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" hover:text-primary">
                  الشركات
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" hover:text-primary">
                  المقالات
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" hover:text-primary">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>
          {/* About Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">عن رصين</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className=" hover:text-primary">
                  إعرفني
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" hover:text-primary">
                  الأحكام والشروط
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" hover:text-primary">
                  سياسة الخصوصية
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" hover:text-primary">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>
          {/* Services Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">خدماتنا</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className=" hover:text-primary">
                  المكاتب الهندسية
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className=" hover:text-primary">
                  التشطيب والديكور
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright and Social Icons */}
      <div className="border-t pt-4 mt-8">
        <div className=" mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div className="flex gap-4 md:mb-0 mb-6">
            <a href="#" className="hover:text-primary">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-primary">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary">
              <FaYoutube />
            </a>
          </div>
          <p className="mb-4 md:mb-0">
            جميع الحقوق محفوظة{" "}
            <span className="text-yellow-500"> لموقع رصين</span> © 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
