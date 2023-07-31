import React from 'react';
import {categoryContainerInfo} from '../../../../util/Constants';
import CategoryCard from './Components/CategoryCard/CategoryCard';

const CategoryContainer = () => {
  return (
    <section className="gap-[1rem] max-w-6xl m-auto mb-6">
      <div className="justify-center items-center gap-[1rem]">
        <div className="w-full gap-2 text-center grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {categoryContainerInfo.map((card) => (
            <CategoryCard link={card.link} imgUrl={card.imgUrl} title={card.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryContainer;
