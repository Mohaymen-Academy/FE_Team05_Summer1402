import {FilmContainer} from '../FilmContainer';
import {CategoryContainer} from '../CategoryContainer';
import {ChannelContainer} from '../ChannelContainer';
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
