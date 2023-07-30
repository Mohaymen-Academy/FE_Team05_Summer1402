import React from 'react';

const DesignBox = () => {
  return (
    <main className="lg:w-[calc(100vw-175px-345px)] w-full flex justify-center items-center">
      {/* <!--drag & drop box--> */}
      <div className="w-[360px] flex flex-col h-[90%] max-h-[800px] relative">
        <div className="bg-white w-full h-full">
          <div className="bg-white">
            <div className="bg-white border-2 border-dashed border-primary-border-light rounded-lg flex flex-col justify-center items-center gap-4 p-4 mx-4 my-8">
              <div className="w-10 h-10 flex justify-center items-center">
                <button className="h-10 rounded-lg w-full flex justify-center items-center bg-primary-light">
                  <img className="w-6 h-6" src="../../public/assets/body/plus.png" alt="افزودن" />
                </button>
              </div>
              <div className="text-blue-500">
                <p>یک قالب را بکشید و رها کنید</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full justify-center items-center pt-3">
          <button className="flex justify-center items-center border-2 border-white rounded-lg w-full h-12 bg-white/60">
            <img className="w-5 h-5 ml-2 mt-1" src="../../public/assets/body/plus.png" alt="افزودن صفحه" />
            <p className="text-blue-500 text-lg font-bold">افزودن صفحه</p>
          </button>
        </div>
        {/* <!--icons column--> */}
        <div className="w-9 flex flex-col gap-2 absolute -left-4 -translate-x-full">
          <button className="btn-edit">
            <img className="w-[80%]" src="../../public/assets/body/pen.png" alt="وبرایش" title="وبرایش" />
          </button>
          <button className="btn-edit">
            <img className="w-[80%]" src="../../public/assets/body/up.png" alt="صفحه قبل" title="صفحه قبل" />
          </button>
          <button className="btn-edit">
            <img className="w-[80%]" src="../../public/assets/body/down.png" alt="صفحه بعد" title="صفحه بعد" />
          </button>
          <button className="btn-edit">
            <img className="w-[80%]" src="../../public/assets/body/lock.png" alt="قفل صفحه" title="قفل صفحه" />
          </button>
          <button className="btn-edit">
            <img className="w-[80%]" src="../../public/assets/body/trash.png" alt="حذف" title="حذف" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default DesignBox;
