import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineAppstore, AiOutlineToTop, AiOutlineDelete, AiOutlineEdit, AiOutlineLogout, AiOutlineSearch } from "react-icons/ai";

export default function Header() {
    let [ BoxLeft, setBoxLeft ] = useState(true);

    return(
        <Box className="color_Bl" h={'90px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} p={'0 20px'}>
            <Box onClick={() => BoxLeft ? setBoxLeft(false) : setBoxLeft(true)} display={'flex'} alignItems={'center'} flexDirection={'column'} cursor={'pointer'}>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAULOcPu5V_xm5ChYkqY9t85VqBR04iWga5gT2i_pngvDAF4AuXuzSlcPP5zGs87N69Es&usqp=CAU" h={'50px'} borderRadius={'full'} />
                <Text fontFamily={'mono'} fontSize={'14px'}>R.Alisher</Text>
            </Box>

            <Box position={'absolute'} display={'flex'} alignItems={'center'} p={BoxLeft ? '0' : '15px 0'} transition={BoxLeft ? 'all 0.4s 0.2s ease' : 'all 0.4s ease'} flexDirection={'column'} top={'90px'} bg={'whitesmoke'} left={0} h={BoxLeft ? 0 : '320px'} w={{base:'40%', xl:"250px"}} overflow={'hidden'} borderRadius={'0 5px 5px 0'}>
                <Box className="Box_ma" w={'90%'} display={'flex'} opacity={BoxLeft ? "0" : "1"} transition={BoxLeft ? 'all 0.2s ease' : 'all 0.2s 0.4s ease'} alignItems={'center'} p={'0 20px'} h={'45px'} bg={"gray.200"} borderRadius={'10px'}>
                    <AiOutlineAppstore size={'25px'}/>
                    <Text fontSize={'18px'} ml={'20px'}>обший</Text>
                </Box>
                <Box className="Box_ma" w={'90%'} display={'flex'} opacity={BoxLeft ? "0" : "1"} transition={BoxLeft ? 'all 0.2s ease' : 'all 0.2s 0.4s ease'} alignItems={'center'} p={'0 20px'} h={'45px'} bg={"green.200"} borderRadius={'10px'}>
                    <AiOutlineToTop size={'25px'}/>
                    <Text fontSize={'18px'} ml={'20px'}>добавить</Text>
                </Box>
                <Box className="Box_ma" w={'90%'} display={'flex'} opacity={BoxLeft ? "0" : "1"} transition={BoxLeft ? 'all 0.2s ease' : 'all 0.2s 0.4s ease'} alignItems={'center'} p={'0 20px'} h={'45px'} bg={"pink.200"} borderRadius={'10px'}>
                    <AiOutlineDelete size={'25px'}/>
                    <Text fontSize={'18px'} ml={'20px'}>удалить</Text>
                </Box>
                <Box className="Box_ma" w={'90%'} display={'flex'} opacity={BoxLeft ? "0" : "1"} transition={BoxLeft ? 'all 0.2s ease' : 'all 0.2s 0.4s ease'} alignItems={'center'} p={'0 20px'} h={'45px'} bg={"blue.200"} borderRadius={'10px'}>
                    <AiOutlineEdit size={'25px'}/>
                    <Text fontSize={'18px'} ml={'20px'}>изменить</Text>
                </Box>
                <Box className="Box_ma" w={'90%'} display={'flex'} opacity={BoxLeft ? "0" : "1"} transition={BoxLeft ? 'all 0.2s ease' : 'all 0.2s 0.4s ease'} alignItems={'center'} p={'0 20px'} h={'45px'} bg={'red.200'} borderRadius={'10px'}>
                    <AiOutlineLogout size={'25px'}/>
                    <Text fontSize={'18px'} ml={'20px'}>выйти</Text>
                </Box>
            </Box>

            <Box display={'flex'} alignItems={'center'}>
                <Input placeholder="поиск" w={'700px'} h={'45px'} color={'white'}></Input>
                <Button h={'45px'} variant={'outline'}><AiOutlineSearch size={'22px'}/></Button>
            </Box>
            <Image src="https://static01.nyt.com/images/2021/11/09/business/00meta-logo-6/00meta-logo-6-mobileMasterAt3x.jpg?auto=webp&quality=90" h={'60px'} borderRadius={'full'} />
        </Box>
    )
}