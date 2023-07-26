import React from 'react';
import img1 from '../../assets/footer/icons/img1.svg';
import img2 from '../../assets/footer/icons/img2.png';
import img3 from '../../assets/footer/icons/img3.svg';
import img4 from '../../assets/footer/icons/img4.svg';
import img5 from '../../assets/footer/icons/img5.svg';

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center bg-ft-white shadow m-1 mx-auto px-6 py-3">
      <div className="w-full flex justify-center flex-col sm:flex-row items-center">
        {/* inform */}
        <div className="hidden sm:flex w-full md:w-full justify-center items-center">
          <div className="flex justify-center mx-5 gap-[1rem] sm:gap-[1rem] md:gap-[2rem]">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-700">راهنما</h2>
              <ul className="text-gray-500 font-medium text-xs sm:text-sm">
                <li className="mb-2">
                  <a href="#">ارتباط با ما</a>
                </li>
                <li>
                  <a href="#">درباره ما</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-700">حقوقی</h2>
              <ul className="text-gray-500 font-medium text-xs sm:text-sm">
                <li className="mb-2">
                  <a href="#">حریم خصوصی</a>
                </li>
                <li>
                  <a href="#">قوانین و مقررات</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-700">سرویس</h2>
              <ul className="text-gray-500 font-medium text-xs sm:text-sm">
                <li className="mb-2">
                  <a href="#">تبلیغات</a>
                </li>
                <li>
                  <a href="#">آگهی دولتی</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* social */}
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex w-full sm:w-full md:w-full justify-center items-center pt-2 sm:pt-5">
            <ul className="flex sm:justify-center text-sm font-medium text-white gap-2 md:gap-4 pb-2 sm:pb-5">
              <li>
                <a href="#" className="flex">
                  <img
                    className="sm:w-12 sm:h-12 h-8 w-8 filter hue-rotate-60 grayscale invert opacity-20 hover:opacity-60 transition-all"
                    src={img5}
                  />
                </a>
              </li>

              <li>
                <a href="#" className="flex">
                  <img
                    className="sm:w-12 sm:h-12 h-8 w-8 filter hue-rotate-60 grayscale invert opacity-20 hover:opacity-60 transition-all"
                    src={img4}
                  />
                </a>
              </li>

              <li>
                <a href="#" className="flex">
                  <img
                    className="sm:w-12 sm:h-12 h-8 w-8 filter hue-rotate-60 grayscale invert opacity-20 hover:opacity-60 transition-all"
                    src={img3}
                  />
                </a>
              </li>

              <li>
                <a href="#" className="flex">
                  <img
                    className="sm:w-12 sm:h-12 h-8 w-8 filter hue-rotate-60 grayscale invert opacity-20 hover:opacity-60 transition-all"
                    src={img2}
                  />
                </a>
              </li>
              <li>
                <a href="#" className="flex">
                  <img
                    className="sm:w-12 sm:h-12 h-8 w-8 filter hue-rotate-60 grayscale invert opacity-20 hover:opacity-60 transition-all"
                    src={img1}
                  />
                </a>
              </li>
            </ul>
          </div>
          {/* copy right text for desktop */}
          <div className="hidden sm:flex items-center flex-col w-full">
            <div className="w-full flex justify-center items-center">
              <p className="text-xs text-slate-600 md:text-center w-full">
                تمامی حقوق مادی و معنوی این صفحه متعلق به پیام رسان سروش پلاس می‌باشد .
              </p>
            </div>
          </div>
        </div>

        {/* copy right text for mobile */}
        <div className="flex sm:hidden items-center w-full justify-center">
          <p className="flex sm:hidden justify-center text-xs sm:text-sm text-slate-600 mt-1 sm:mt-2 mb-1 w-full">
            تمامی حقوق مادی و معنوی این صفحه محفوظ می‌باشد .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
