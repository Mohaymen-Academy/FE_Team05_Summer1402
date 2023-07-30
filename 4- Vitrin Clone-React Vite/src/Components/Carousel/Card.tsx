import {useState} from 'react';
import {useSpring, animated} from 'react-spring';
type CardProps = {
  imageSrc: string;
  isFront: boolean;
};
const Card: React.FC<CardProps> = ({imageSrc, isFront}) => {
  const [hover, setHover] = useState(false);
  const props3 = useSpring({
    transform: hover ? 'scale(1.03)' : 'scale(1)',
    boxShadow: hover ? '0 20px 25px rgb(0 0 0 / 25%)' : '0 2px 10px rgb(0 0 0 / 8%)',
  });
  return (
    <animated.div
      className="w-[90vw] sm:w-[550px] sm:h-[309px] rounded-[10px] overflow-hidden"
      style={props3}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a href="#" className="bg-green-300 w-full h-full" style={{pointerEvents: !isFront ? 'none' : 'auto'}}>
        <img className="!object-fill w-full h-full bg-slate-600" src={imageSrc} alt="carousel slide" />
      </a>
    </animated.div>
  );
};

export default Card;
