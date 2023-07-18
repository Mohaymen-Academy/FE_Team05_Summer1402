import React from 'react';
import {Card as ChakraCard, CardBody, CardFooter} from '@chakra-ui/react';
import {
  IconButton as ChakraIconButton,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import {AiOutlineEye} from 'react-icons/ai';

type NewsCardProps = {
  heading: string;
  view: number;
  imgUrl: string;
};

function NewsCard({heading, view, imgUrl}: NewsCardProps): React.ReactNode {
  return (
    <>
      <ChakraCard
        bg="rgb(76 92 115)"
        shadow="xl"
        className="relative w-full group rounded-lg overflow-hidden shadow-md"
      >
        <CardBody className="text-white" p="0">
          <Image src={imgUrl} w="100%" h="200px" />
          <Stack mt="6" spacing="3" className="absolute top-0 w-full h-full z-20">
            <div className="flex bg-slate-600 pl-1 rounded-lg right-3 mb-5 top-0 absolute w-[23%]">
              <AiOutlineEye className="my-2 mx-1" color="#fff" />
              <label className="my-1 pr-2"> {view}</label>
            </div>
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/60 from-30% to-white/0">
              <Heading className="absolute bottom-16 left-5" size="md">
                {heading}
              </Heading>
            </div>
          </Stack>
        </CardBody>
      </ChakraCard>
    </>
  );
}

export default NewsCard;
