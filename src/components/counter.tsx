import React from "react";
import ReactDOM from "react-dom";
import { Box, SimpleGrid, Center } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons'


const Counter = (props: { numberSix:  number ; numberFive: number; numberFour: string | number ; numberThree: number ; numberTwo:  number ; numberOne: number }) => {

    return (
        <Box bg='#00ADB5' w="100%" h='350px' >
            <Center><Text fontSize='40px' color='black' mb='50px' mt='30px' >Counter seconds app</Text></Center>
            <SimpleGrid minChildWidth='150px' spacing='40px' m='10px'>
                <Box bg='#222831' height='150px'> <TimeIcon w={70} h='150px' ml='50px' color='white'/></Box>
                <Center bg='#222831' height='150px' > <Text fontSize='40px'  color='white'>{props.numberSix} </Text> </Center>
                <Center bg='#222831' height='150px'> <Text fontSize='40px'  color='white'>{props.numberFive}</Text> </Center>
                <Center bg='#222831' height='150px'> <Text fontSize='40px' color='white'>{props.numberFour} </Text> </Center>
                <Center bg='#222831' height='150px'> <Text fontSize='40px'  color='white'>{props.numberThree} </Text> </Center>
                <Center bg='#222831' height='150px'> <Text fontSize='40px'  color='white'>{props.numberTwo} </Text> </Center>
                <Center bg='#222831' height='150px'> <Text fontSize='40px'  color='white'>{props.numberOne} </Text> </Center>

            </SimpleGrid>
        </Box>
    )
}
Counter.defaultProps = {
	numberOne: 0,
    numberTwo: 0,
    numberThree: 0,
    numberFour: 0,
    numberFive: 0,
    numberSix: 0
};

let count = 0;

setInterval(
    () => {
        let six = Math.floor(count/100000) % 10;
        let five = Math.floor(count/10000)% 10;
        let four = Math.floor(count/1000)% 10;
        let three = Math.floor(count/100)% 10;
        let two = Math.floor(count/10)% 10;
        let one = Math.floor(count) % 10   
        count ++;
        ReactDOM.render(<Counter numberOne={one} numberTwo={two} numberThree={three} numberFour={four} numberFive={five} numberSix={six} />, document.getElementById('root'));
    },1000);




export default Counter;