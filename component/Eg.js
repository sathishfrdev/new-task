import React from 'react';
import {Flex,Spacer,Box ,Center,Square,Circle,AspectRatio} from '@chakra-ui/react'

function Eg() {
  return (
<>
<Flex
bg="green.400"
height="400px"
justifyContent="space-evenly"
align="center"
>
    <Center h="100px" w="100px" bg="red.200">
    box1
    </Center>

    <Center h="100px" w="100px" bg="green.200">
    box2
    </Center>

    <Center h="100px" w="100px" bg="blue.200">
    box3
    </Center>

    <Center h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
    box4
    </Center>

    <Circle h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
    CIRLCE
    </Circle>

    <Circle h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
    CIRLCE
    </Circle>

    <Circle h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
    CIRLCE
    </Circle>

    <Circle h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
    CIRLCE
    </Circle>

    <Circle h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
    CIRLCE
    </Circle>

    <Circle h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
    CIRLCE
    </Circle>

   
    
</Flex>
<Flex bg="green.600"
height="400px"
justifyContent="space-evenly"
align="center">
<Square>
squred
</Square>
<Circle h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
CIRLCE
</Circle>

<Circle h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
CIRLCE
</Circle>

<Circle h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
CIRLCE
</Circle>
<Circle h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
CIRLCE
</Circle>
<Circle h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
CIRLCE
</Circle>
<Circle h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
CIRLCE
</Circle>
<Circle h="100px" w="100px" bg="blue.500" color="whiteAlpha.500">
CIRLCE
</Circle>
</Flex>

</>
)
}

export default Eg;
