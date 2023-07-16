import React from 'react';
import {Text} from '@chakra-ui/react';

type SlideProps = {
  imgUrl: string;
};

function Slide({imgUrl}: SlideProps): React.ReactNode {
  return (
    <div className="relative">
      <Text className="absolute"></Text>
      <img src={imgUrl} />
    </div>
  );
}

export default Slide;
