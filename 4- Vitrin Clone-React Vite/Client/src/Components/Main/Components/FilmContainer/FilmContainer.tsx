import FilmCard from './Components/FilmCard/FilmCard';
import {filmCardInfo} from '../../../../util/Constants';

const FilmContainer = () => {
  return (
    <section className="w-full bg-line bg-full">
      <section className="flex flex-col justify-center items-center w-[95%] xl:w-full max-w-6xl m-auto my-2">
        <div className="w-full text-xl pr-2 mb-2">فیلم‌های پرطرفدار</div>
        <div className="grid justify-center items-center gap-3 md:gap-6 grid-cols-1 md:grid-cols-2 w-full text-white">
          {filmCardInfo.map((card) => (
            <FilmCard
              imgUrl={card.imgUrl}
              name={card.name}
              director={card.director}
              rate={card.rate}
              label1={card.label1}
              label2={card.label2}
              key={card.id}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default FilmContainer;
