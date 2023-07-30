import React from 'react';

const PageSettings = () => {
  return (
    <section className="bg-white h-full w-[300px] lg:w-[345px] p-[24px] absolute lg:static -left-[345px] transition-all z-50 shadow-lg">
      <div className="flex justify-start items-center w-full font-semibold mb-[16px]">
        <h2>تنظیمات صفحه</h2>
      </div>
      {/* <div class="w-full flex flex-col justify-start items-center gap-4">
        <div class="flex justify-between w-full items-center">
          <div class="w-full text-[14px] font-semibold">
            <p>فاصله بین فریم ها</p>
          </div>
          <select class="input-drop">
            <option selected>پیش فرض</option>
            <option value="2rem">2</option>
            <option value="4rem">4</option>
            <option value="8rem">8</option>
            <option value="12rem">12</option>
          </select>
        </div>
        <div class="flex justify-between w-full items-center">
          <div class="text-[14px] font-semibold">
            <p>حاشیه</p>
          </div>
          <input type="text" class="input w-[40px] h-[40px] pr-1/2 placeholder:text-[12px]" placeholder="۱۶" />
        </div>
        <div class="flex justify-between w-full items-center">
          <div class="text-[14px] font-semibold">
            <p>فاصله از دیواره</p>
          </div>
          <input type="text" class="input w-[40px] h-[40px] pr-1/2 placeholder:text-[12px]" placeholder="۲۴" />
        </div>
      </div> */}
    </section>
  );
};

export default PageSettings;
