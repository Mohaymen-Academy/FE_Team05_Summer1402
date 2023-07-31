import React from 'react';

type CategoryCardProps = {
  link: string;
  imgUrl: string;
  title: string;
};
const CategoryCard: React.FC<CategoryCardProps> = ({link, imgUrl, title}) => {
  return (
    <>
      <a href={link} className="relative group">
        <img
          className="bg-white rounded-xl opacity-100 group-hover:scale-75 group-hover:-translate-y-5 transition-all duration-300 ease-out"
          src={imgUrl}
          alt={title}
        />
        <div className="absolute scale-100 transiiton right-1/2 whitespace-nowrap bottom-1/2 translate-y-1/2 group-hover:bottom-0 group-hover:-translate-y-1/4 translate-x-1/2 z-[-50] transition-all duration-300 ease-out">
          {title}
        </div>
      </a>
    </>
  );
};

export default CategoryCard;
