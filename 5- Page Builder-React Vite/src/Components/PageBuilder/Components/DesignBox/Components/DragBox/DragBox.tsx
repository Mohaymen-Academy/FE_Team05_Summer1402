import plus from '../../../../../../assets/body/plus.svg';

const DragBox = () => {
  return (
    <div className="bg-white">
      <div className="bg-white border-2 border-dashed border-primary-border-light rounded-lg flex flex-col justify-center items-center gap-4 p-4 mx-4 my-8">
        <div className="w-10 h-10 flex justify-center items-center">
          <button className="h-10 rounded-lg w-full flex justify-center items-center bg-primary-light">
            <img className="w-6 h-6" src={plus} alt="افزودن" />
          </button>
        </div>
        <div className="text-blue-500">
          <p>یک قالب را بکشید و رها کنید</p>
        </div>
      </div>
    </div>
  );
};

export default DragBox;
