type ButtonElementProps = {
  setting?: Record<string, any>;
};

const ButtonElement: React.FC<ButtonElementProps> = ({setting}) => {
  console.log('in text element', setting);
  return (
    <div className="bg-white rounded-lg flex flex-col justify-center items-center w-full">
      <button className="h-9 w-[105px] bg-neutral-main text-white rounded-[14px]">دکمه</button>
    </div>
  );
};

export default ButtonElement;
