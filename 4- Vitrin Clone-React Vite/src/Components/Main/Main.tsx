import {FilmContainer} from '../FilmContainer';
import {CategoryContainer} from '../CategoryContainer';
import {ChannelContainer} from '../ChannelContainer';
import {Banner} from '..';
import {bannerArray} from '../../util/Constants';
const Main = () => {
  return (
    <main className="m-auto overflow-hidden flex flex-col gap-4 mb-10">
      <CategoryContainer />
      <ChannelContainer />
      <ChannelContainer />
      <ChannelContainer />
      <Banner
        img={bannerArray[0].image}
        color={bannerArray[0].color}
        buttonText="اطلاعات بیشتر"
        dir="l"
        upperText="پویش سبک"
        lowerText="زندگی اسلامی"
        textColor={bannerArray[0].textColor}
      />
      <FilmContainer />
    </main>
  );
};

export default Main;
