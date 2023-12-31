import React from 'react';
import {Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button} from '@chakra-ui/react';
import {TbShoppingCart} from 'react-icons/tb';

type PostTypes = {
  img: string;
};
function Post({img}: PostTypes): React.ReactNode {
  return (
    <Card
      direction={{base: 'column', sm: 'row'}}
      h={'300px'}
      overflow="hidden"
      variant="solid"
      shadow="xl"
      bg={'rgb(76 92 115)'}
      className="group"
    >
      <Image
        objectFit="cover"
        w={{base: '100%', sm: '40%'}}
        src={img}
        alt="Caffe Latte"
        className="group-hover:scale-[1.01] transition"
      />

      <Stack>
        <CardBody>
          <Heading size="md">The perfect latte</Heading>

          <Text py="2">Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.</Text>
        </CardBody>

        <CardFooter>
          <Button rightIcon={<TbShoppingCart size="22" />} variant="solid" colorScheme="blue">
            Buy now
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default Post;
