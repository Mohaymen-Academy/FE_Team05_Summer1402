import React from 'react';

type AsideMenuTagProps = {
  title: string;
  link: string;
};
const AsideMenuTag: React.FC<AsideMenuTagProps> = ({title, link}) => {
  return (
    <div>
      <li className="w-[80px]">
        <a href={link}>{title}</a>
      </li>
    </div>
  );
};

export default AsideMenuTag;
