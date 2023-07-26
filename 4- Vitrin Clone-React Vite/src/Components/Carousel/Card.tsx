import {useState} from 'react';
import {useSpring, animated} from 'react-spring';
type CardProps = {
  imageSrc: string;
};
const Card: React.FC<CardProps> = ({imageSrc}) => {
  const [hover, setHover] = useState(false);

  const props3 = useSpring({
    transform: hover ? 'scale(1.03)' : 'scale(1)',
    boxShadow: hover ? '0 20px 25px rgb(0 0 0 / 25%)' : '0 2px 10px rgb(0 0 0 / 8%)',
  });
  return (
    <animated.div
      className="w-[720px] h-[405px] rounded-[10px] overflow-hidden"
      style={props3}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <a style={{pointerEvents: 'none'}}>
        <img className="!object-fill w-full h-full" src={imageSrc} alt="carousel slide" />
      </a>
    </animated.div>
  );
};

export default Card;
