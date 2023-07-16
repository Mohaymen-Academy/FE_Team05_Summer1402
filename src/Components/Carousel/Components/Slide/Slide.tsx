import React from 'react';
import {Button, Text} from '@chakra-ui/react';

type SlideProps = {
  imgUrl: string;
};

function Slide({imgUrl}: SlideProps): React.ReactNode {
  return (
    <div className="relative">
      <img src={imgUrl} />
      <div className="bg-gradient-to-t from-black/60 from-30% to-white/0 w-full h-full absolute top-0 flex flex-col justify-end items-start gap-10 text-neutral-300 p-10">
        <Text as="strong" fontSize="4xl">
          Lorem ipsum dolor sit
        </Text>
        <Text as="h1" fontSize="xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quos totam voluptates ullam expedita culpa
          molestiae Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum quos totam voluptates ullam expedita
          culpa molestiae
        </Text>
        <Button>Pre Order now</Button>
      </div>
    </div>
  );
}

export default Slide;
