import React from 'react';
import {CardsData} from '../../util/Constants';
import {Card} from '../Card';

function Cards(): React.ReactNode {
  return (
    <div>
      <div>
        <h2 className="text-white my-5 pl-5 border-l-4 border-orange-600 tracking-tight font-semibold">TRENDING NOW</h2>
      </div>
      <div className="flex md:flex md:items-center md:justify-between items-stretch mb-10 gap-2 w-full">
        {CardsData.map((tmp) => (
          <Card heading={tmp.heading} description={tmp.description} price={tmp.price} imgUrl={tmp.imgUrl} />
        ))}
      </div>
    </div>
  );
}

export default Cards;
