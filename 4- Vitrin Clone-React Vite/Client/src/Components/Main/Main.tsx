import {FilmContainer} from '../Main/Components/FilmContainer';
import {CategoryContainer} from '../Main/Components/CategoryContainer';
import {ChannelContainer} from '../Main/Components/ChannelContainer';
import {Banner} from '..';
import {sectionArray} from '../../util/Constants';

const Main = () => {
  return (
    <main className="m-auto overflow-hidden flex flex-col gap-4 mb-10">
      <CategoryContainer />
      {sectionArray.map((banner, i) => (
        <div key={banner.id}>
          <Banner
            img={banner.image}
            color={banner.color}
            buttonText={banner.buttonText}
            dir={i % 2 === 0 ? 'r' : 'l'}
            upperText={banner.upperText}
            lowerText={banner.lowerText}
            textColor={banner.textColor}
            oneLine={banner.oneLine}
            id={banner.tagId}
          />
          <ChannelContainer headerText={banner.headerText} />
        </div>
      ))}

      <FilmContainer />
    </main>
  );
};

export default Main;
