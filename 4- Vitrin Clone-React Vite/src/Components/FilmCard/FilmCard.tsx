import React from 'react';

type FilmCardProps = {
  imgUrl: string;
  name: string;
  director: string;
  rate: number;
  label1: string;
  label2: string;
};

const FilmCard: React.FC<FilmCardProps> = ({imgUrl, name, director, rate, label1, label2}) => {
  return (
    <div className="bg-black/40 backdrop-blur-[4px] rounded-lg flex justify-start items-start w-full px-6 relative">
      <div className="flex justify-start items-center py-3">
        <img src={imgUrl} className="rounded-lg" />
      </div>
      <div className="">
        <div className="w-full flex justify-start items-center px-2 py-1 text-lg font-bold">
          <h2>{name}</h2>
        </div>
        <div className="w-full flex justify-start items-center px-2 py-1 mb-3 text-sm">
          <p>کارگردان: {director}</p>
        </div>
        <div className="w-full flex justify-start items-center px-2 py-1 mb-2">
          <div className="w-14 text-center rounded-xl text-sm bg-slate-700 py-1 px-2">{rate}/10</div>
        </div>
        <div className="w-full flex justify-start items-center px-2 py-1 gap-2 mb-7">
          <div className="w-14 text-center rounded-xl text-sm bg-slate-700 py-1 px-2">{label1}</div>
          <div className="w-14 text-center rounded-xl text-sm bg-slate-700 py-1 px-2">{label2}</div>
        </div>
        <div className="w-full flex justify-Start items-start px-2 py-1">
          <button className="rounded-lg border-2 w-20 text-cente bg-black/70">مشاهده</button>
        </div>
      </div>
      <div className="text-sm rounded-xl bg-black whitespace-nowrap absolute left-2 top-2 px-2 py-1">اکران آنلاین</div>
    </div>
  );
};

export default FilmCard;
