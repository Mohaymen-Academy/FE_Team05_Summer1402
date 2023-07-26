import React from 'react';
import {FilmContainer} from '../FilmContainer';
import {CategoryContainer} from '../CategoryContainer';
import {ChannelContainer} from '../ChannelContainer';

const Main = () => {
  return (
    <main className="m-auto overflow-hidden flex flex-col gap-4 mb-10">
      <CategoryContainer />
      <ChannelContainer />
      <FilmContainer />
    </main>
  );
};

export default Main;
