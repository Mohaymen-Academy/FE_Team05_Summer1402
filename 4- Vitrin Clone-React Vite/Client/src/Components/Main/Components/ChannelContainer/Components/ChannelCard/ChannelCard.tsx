import React from 'react';

type ChannelCardProps = {
  imgUrl: string;
  link: string;
  title: string;
};

const ChannelCard: React.FC<ChannelCardProps> = ({imgUrl, link, title}) => {
  return (
    <div className="w-full h-full flex flex-col rounded-lg shadow bg-white">
      <div className="flex justify-center items-center py-2 px-1">
        <a href={link} className="pointer-events-none">
          <img className="rounded-xl w-24 h-24" src={imgUrl} alt={title} />
        </a>
      </div>
      <div className="text-sm flex w-32 justify-center items-center pb-2 px-3">
        <a href={link} className="pointer-events-none">
          <p>{title}</p>
        </a>
      </div>
    </div>
  );
};

export default ChannelCard;
