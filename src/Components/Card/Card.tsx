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
import {TbShoppingCart} from 'react-icons/tb';

type CardProps = {
  heading: string;
  description: string;
  price: string;
  imgUrl: string;
};

function Card({heading, description, price, imgUrl}: CardProps): React.ReactNode {
  return (
    <>
      <ChakraCard bg="rgb(76 92 115)" shadow="xl" className="w-full relative overflow-hidden group">
        <CardBody className="text-white" p="0">
          <Image src={imgUrl} w="100%" h="360px" />
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/60 from-30% to-white/0 opacity-0 group-hover:opacity-100 transition"></div>
          <Stack
            mt="6"
            spacing="3"
            className="absolute w-full h-full top-full group-hover:-top-6 transition-all left-0 px-5 pt-36 "
          >
            <Heading size="md">{heading}</Heading>
            <Text>{description}</Text>
            <Text fontSize="2xl">{price}</Text>
            <Divider />
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="gray">
                Try for free
              </Button>
              <ChakraIconButton
                variant="solid"
                colorScheme="orange"
                icon={<TbShoppingCart size="22" />}
                aria-label="Buy"
              />
            </ButtonGroup>
          </Stack>
        </CardBody>
      </ChakraCard>
    </>
  );
}

export default Card;
