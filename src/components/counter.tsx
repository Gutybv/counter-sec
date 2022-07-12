import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Box, SimpleGrid, Center } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { TimeIcon } from '@chakra-ui/icons'


const Counter = (props: { numberSix:  number ; numberFive: number; numberFour: number ; numberThree: number ; numberTwo:  number ; numberOne: number }) => {
    const [seconds, setSeconds] = useState(0);
    const [six, setSix] = useState(0);
    useEffect(() => {
        const interval = setInterval(
            () => {
                
                setSeconds(seconds => seconds +1);
                console.log(seconds);
                // ReactDOM.render(<Counter numberOne={one} numberTwo={two} numberThree={three} numberFour={four} numberFive={five} numberSix={six} />, document.getElementById('root'));
            },1000 );
            return () => clearInterval(interval);
    }, [seconds]);

    return (
        <Box bg='#00ADB5' w="100%" h='600px' >
            <Center><Text fontSize='40px' color='black' mb='50px' mt='30px' >Counter seconds app</Text></Center>
            <SimpleGrid minChildWidth='150px' spacing='40px' m='10px'>
                <Box bg='#222831' boxShadow='lg' height='150px'> <TimeIcon w={70} h='150px' ml='50px' color='white'/></Box>
                <Center bg='#222831' height='150px' boxShadow='lg'> <Text fontSize='40px'  color='white'>{Math.floor(seconds/100000) % 10} </Text> </Center>
                <Center bg='#222831' height='150px' boxShadow='lg'> <Text fontSize='40px'  color='white'>{Math.floor(seconds/10000)% 10}</Text> </Center>
                <Center bg='#222831' height='150px' boxShadow='lg'> <Text fontSize='40px' color='white'>{Math.floor(seconds/1000)% 10} </Text> </Center>
                <Center bg='#222831' height='150px' boxShadow='lg'> <Text fontSize='40px'  color='white'>{Math.floor(seconds/100)% 10} </Text> </Center>
                <Center bg='#222831' height='150px' boxShadow='lg'> <Text fontSize='40px'  color='white'>{Math.floor(seconds/10)% 10} </Text> </Center>
                <Center bg='#222831' height='150px' boxShadow='lg'> <Text fontSize='40px'  color='white'>{Math.floor(seconds) % 10} </Text> </Center>

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








export default Counter;