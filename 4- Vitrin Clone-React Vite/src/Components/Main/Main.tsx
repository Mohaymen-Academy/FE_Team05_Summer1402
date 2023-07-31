import {FilmContainer} from '../Main/Components/FilmContainer';
import {CategoryContainer} from '../Main/Components/CategoryContainer';
import {ChannelContainer} from '../Main/Components/ChannelContainer';
import {Banner} from '..';
import {bannerArray} from '../../util/Constants';
const Main = () => {
  return (
    <main className="m-auto overflow-hidden flex flex-col gap-4 mb-10">
      <CategoryContainer />
      {bannerArray.map((banner, i) => (
        <>
          <Banner
            img={banner.image}
            color={banner.color}
            buttonText={banner.buttonText}
            dir={i % 2 === 0 ? 'r' : 'l'}
            upperText={banner.upperText}
            lowerText={banner.lowerText}
            textColor={banner.textColor}
            oneLine={banner.oneLine}
          />
          <ChannelContainer />
        </>
      ))}

      <FilmContainer />
    </main>
  );
};

export default Main;
