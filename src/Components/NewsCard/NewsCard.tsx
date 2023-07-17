import React from 'react';
import { Card as ChakraCard, CardBody, CardFooter } from '@chakra-ui/react';
import { IconButton as ChakraIconButton,Image,Stack,Heading,Text,Divider,Button,ButtonGroup } from '@chakra-ui/react';
import {AiOutlineEye} from 'react-icons/ai';

type NewsCardProps = {
  heading : string,
  view : string,
  imgUrl : string
}

function NewsCard({heading,view,imgUrl}:NewsCardProps):React.ReactNode{
  return (<>
  <ChakraCard bg="rgb(76 92 115)" shadow="xl" className='relative w-full group'>
  <CardBody className='text-white' p="0">
    <Image src={imgUrl} w="40%" h = "200px" />
    <Stack mt='6' spacing='3' className='absolute w-full top-full  px-5 z-20'>
        <div className='flex bg-slate-600 w-[6%] pl-1 rounded-lg right-0 mb-14'>
         <AiOutlineEye className="my-2 mx-1" color="#fff"/>
         <label className='my-1'> {view}</label>
      </div>
      <Heading size='md' >{heading}</Heading>
    </Stack>
  </CardBody>
  
</ChakraCard>
    </>
  )
}

export default NewsCard;