import React from 'react';
import {Button, Text} from '@chakra-ui/react';

type SlideProps = {
  heading : string,
  description : string,
  imgUrl: string;
};

function Slide({heading,description,imgUrl}: SlideProps): React.ReactNode {
  return (
    <div className="relative">
      <img src={imgUrl} />
      <div className="bg-gradient-to-t from-black/60 from-30% to-white/0 w-full h-full absolute top-0 flex flex-col justify-end items-start gap-10 text-neutral-300 p-10">
        <Text as="strong" fontSize="4xl">
          {heading}
        </Text>
        <Text as="h1" fontSize="xl">
          {description}
        </Text>
        <Button>Pre Order now</Button>
      </div>
    </div>
  );
}

export default Slide;
