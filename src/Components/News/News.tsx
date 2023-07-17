import React from 'react';
import {NewsCard} from '../NewsCard';
import img from '../../assets/images/cards/img1.jpg';
import {newsDetails} from '../../util/Constants';

function News(): React.ReactNode {
  return (
    <>
      <div>
        <h2 className="text-white my-5 pl-5 border-l-4 border-orange-600 tracking-tight font-semibold">TOP VIEWS</h2>
      </div>
      <div className="flex flex-col gap-4">
        {newsDetails.map((news) => (
          <NewsCard imgUrl={news.img} view={news.view} heading={news.heading} />
        ))}
      </div>
    </>
  );
}

export default News;
