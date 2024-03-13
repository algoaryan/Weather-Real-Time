import { Button, Center, Flex, Icon, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeatherByCity, getWeatherByLocation } from "../redux/actions";
import { HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {

    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    const toast = useToast();

    const handleChnage = () => {
        dispatch(getWeatherByCity(city, toast));
    }

    const handleLocationData = () => {
        dispatch(getWeatherByLocation(toast));
    }

    return (
        <Flex p={'10px'} minH={'70px'} bg={'#d7defa'} justifyContent={'center'} flexDirection={['column', 'row']} gap={['10px', '0px']}>
            <Center px={'10px'}>
                <Input
                    onKeyPress={({ key }) => { key === "Enter" ? handleChnage() : undefined }}
                    onInput={(e) => { setCity(e.target.value) }}
                    value={city}
                    borderRadius={'15px 0px 0px 15px'}
                    bg={'white'}
                    _focus={{ 'border': 'none' }}
                    placeholder="City"
                />
                <Button
                    onClick={handleChnage}
                    borderRadius={'0px 15px 15px 0px'}
                    color={'white'}
                    bg={'#5e82f4'}
                    _hover={{ 'bg': '5e82f4' }}
                >
                    Search
                </Button>
            </Center>
            <Center px={'10px'}>
                <Button
                    bg={'#5e82f4'}
                    _hover={{ 'bg': '5e82f4' }}
                    color={'white'}
                    w={'100%'}
                    borderRadius={'15px'}
                    leftIcon={<Icon w={'30px'} h={'30px'} as={HiLocationMarker} />}
                    onClick={handleLocationData}
                >
                    Your Location Weather
                </Button>
            </Center>
            <Center px={'10px'}>
                <Button
                    bg={'#5e82f4'}
                    _hover={{ 'bg': '5e82f4' }}
                    color={'white'}
                    w={'100%'}
                    borderRadius={'15px'}
                    leftIcon={<Icon w={'30px'} h={'30px'} as={FaGithub} />}
                    
                >
                    <a href="https://www.github.com/sudodevop" target="_blank">Github</a>
                </Button>
            </Center>
            <Center px={'10px'}>
                <Button
                    bg={'#5e82f4'}
                    _hover={{ 'bg': '5e82f4' }}
                    color={'white'}
                    w={'100%'}
                    borderRadius={'15px'}
                    leftIcon={<Icon w={'30px'} h={'30px'} as={FaLinkedin} />}
                    
                >
                    <a href="https://www.github.com/sudodevop" target="_blank">LinkedIn</a>
                </Button>
            </Center>
        </Flex >
    );
};