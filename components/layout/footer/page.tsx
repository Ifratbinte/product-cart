import Link from "next/link";
import React from "react";
import { FiFacebook, FiLinkedin, FiPhoneCall, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      {/* footer top */}
      <div className="bg-slate-50 shadow">
        <div className="container mx-auto py-20">
          <div className="flex justify-between gap-10">
            <div className="w-4/12 pr-10">
              <div className="text-3xl">Logo</div>
              <p className="text-gray-500 font-medium text-base pt-3">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface
              </p>
            </div>
            <div className="w-3/12 pr-10">
              <ul>
                <li className="list">
                  <Link href="#">Help Center</Link>
                </li>
                <li className="list">
                  <Link href="#">How to buy</Link>
                </li>
                <li className="list">
                  <Link href="#">System</Link>
                </li>
                <li className="list">
                  <Link href="#">Terms & Condition</Link>
                </li>
              </ul>
            </div>
            <div className="w-3/12 pr-10">
              <ul>
                <li className="list">
                  <Link href="#">Learn & Explore</Link>
                </li>
                <li className="list">
                  <Link href="#">Publications</Link>
                </li>
                <li className="list">
                  <Link href="#">Cares</Link>
                </li>
              </ul>
            </div>

            <div className="w-2/12">
              <div className="text-2xl font-semibold mb-4">
                Stay Connect with
              </div>
              <ul className="flex">
                <li className="mr-6">
                  <Link href="#">
                    <FiFacebook className="w-6 h-6 hover:text-purple-600" />
                  </Link>
                </li>
                <li className="mr-6">
                  <Link href="#">
                    <FiTwitter className="w-6 h-6 hover:text-purple-600" />
                  </Link>
                </li>
                <li className="mr-6">
                  <Link href="#">
                    <FiLinkedin className="w-6 h-6 hover:text-purple-600" />
                  </Link>
                </li>
                <li className="mr-6">
                  <Link href="#">
                    <FiPhoneCall className="w-6 h-6 hover:text-purple-600" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="border-t border-slate-200 bg-slate-200 shadow flex justify-center py-2">
        <div className="text-base">
          All rights reserved by
        </div>
        <span className="ml-1 font-medium">@{new Date().getFullYear()}</span>
      </div>
    </>
  );
};

export default Footer;
