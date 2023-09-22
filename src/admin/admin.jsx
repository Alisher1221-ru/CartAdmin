import { Box, Text } from "@chakra-ui/react";

export default function Admin() {
    return(
        <>
        <Box w={'100%'} h={'92vh'} bg={'gray.200'} p={'20px 20px'}>
            <Box w={'100%'} h={'50%'} borderRadius={'10px'} mb={"50px"} bg={'gray.100'} p={'10px'}>
                <Box w={"100%"} h={"60px"} display={'flex'} alignItems={'center'}>
                    <Box mr={'20px'} w={"200px"} h={"50px"} bg={'blue.100'} borderRadius={'10px'} border={'1px solid blue'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Text fontFamily={'mono'}>регистрации <span className="Green">1000</span></Text>
                    </Box>
                    <Box mr={'20px'} w={"200px"} h={"50px"} bg={'blue.100'} borderRadius={'10px'} border={'1px solid blue'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Text fontFamily={'mono'}>тавары <span className="Green">500</span></Text>
                    </Box>
                    <Box w={"200px"} h={"50px"} bg={'blue.100'} borderRadius={'10px'} border={'1px solid blue'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Text fontFamily={'mono'}>продан <span className="Green">200</span></Text>
                    </Box>
                </Box>
            </Box>
            <Box w={'100%'} h={'40%'} borderRadius={'10px'} bg={'gray.100'}></Box>
        </Box>
        </>
    )
}