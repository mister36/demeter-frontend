import {
    Flex,
    Box,
    Image,
    Text,
    Button,
    Input,
    useDisclosure,
} from "@chakra-ui/react";
import { SettingsIcon, ChevronDownIcon, ArrowDownIcon } from "@chakra-ui/icons";
import { utils, BigNumber } from "ethers";
import { SwapService } from "@liquality/wallet-sdk";
import SwapButton from "./SwapButton";
import TokenSelect from "./TokenSelect";
import { useEffect, useState } from "react";

export default function Trade() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [value, setValue] = useState("");
    const [outputValue, setOutputValue] = useState("");

    const tokenAddresses = {
        MATIC: "0x0000000000000000000000000000000000000000",

        WMATIC: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    };

    const getQuote = async (amount) => {
        const quote = await SwapService.getQuote({
            srcChainId: 137,
            srcChainTokenIn: tokenAddresses.MATIC,
            srcChainTokenInAmount: utils.parseEther(amount).toString(),
            dstChainId: 137,
            dstChainTokenOut: tokenAddresses.WMATIC,
        });
        return utils.formatEther(
            BigNumber.from(quote.minAmount.slice(0, quote.minAmount.length - 2))
        );
    };

    useEffect(() => {
        const update = async () => {
            setOutputValue(await getQuote(value));
        };
        update();
    }, [value]);

    return (
        <Box
            w="17.62rem"
            mx="auto"
            mt="5.25rem"
            boxShadow="rgb(0 0 0 / 8%) 0rem 0.37rem 0.62rem"
            borderRadius="1.37rem"
            style={{
                margin: 0,
                position: "absolute",
                bottom: "75px",
                left: "10px",
            }}
        >
            <Flex
                alignItems="center"
                p="1rem 1.25rem 0.5rem"
                bg="#141517"
                color="rgb(86, 90, 105)"
                justifyContent="space-between"
                borderRadius="1.37rem 1.37rem 0 0"
            >
                <Text color="black" fontWeight="500">
                    Swap
                </Text>
                <SettingsIcon
                    fontSize="1.25rem"
                    cursor="pointer"
                    _hover={{ color: "rgb(128,128,128)" }}
                />
            </Flex>

            <Box p="0.5rem" bg="#141517" borderRadius="0 0 1.37rem 1.37rem">
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    bg="#35384D"
                    p="1rem 1rem 1.7rem"
                    borderRadius="1.25rem"
                    border="0.06rem solid rgba(237, 238, 242, 0.5)"
                    _hover={{ border: "0.06rem solid rgb(211,211,211)" }}
                >
                    <Box>
                        <TokenSelect
                            image={window.__imageSelected}
                            value={window.__selected}
                            button="button1"
                            title="Matic"
                        />
                    </Box>
                    <Box>
                        <Input
                            placeholder="0.0"
                            fontWeight="500"
                            fontSize="1.5rem"
                            width="100%"
                            size="19rem"
                            textAlign="right"
                            bg="#35384D"
                            outline="none"
                            border="none"
                            focusBorderColor="none"
                            type="number"
                            color="white"
                            onChange={function (e) {
                                setValue(e.target.value);
                            }}
                        />
                    </Box>
                </Flex>

                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    bg="#35384D"
                    pos="relative"
                    p="1rem 1rem 1.7rem"
                    borderRadius="1.25rem"
                    mt="0.25rem"
                    border="0.06rem solid rgba(237, 238, 242, 0.5)"
                    _hover={{ border: "0.06rem solid rgb(211,211,211)" }}
                >
                    <Box>
                        <TokenSelect
                            image={window.__imageSelected2}
                            value={window.__selected2}
                            button="button2"
                            title="WMatic"
                        />
                    </Box>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        bg="#35384D"
                        p="0.18rem"
                        borderRadius="0.75rem"
                        pos="relative"
                        top="-2.37rem"
                        left="2.5rem"
                    >
                        <ArrowDownIcon
                            bg="rgb(247, 248, 250)"
                            color="rgb(128,128,128)"
                            h="1.5rem"
                            width="1.62rem"
                            borderRadius="0.75rem"
                        />
                    </Flex>
                    <Box>
                        <Input
                            placeholder="0.0"
                            fontSize="1.5rem"
                            width="100%"
                            size="19rem"
                            textAlign="right"
                            bg="#35384D"
                            outline="none"
                            border="none"
                            focusBorderColor="none"
                            type="number"
                            color="white"
                            value={outputValue}
                            readOnly
                        />
                    </Box>
                </Flex>
                <Box color="black"></Box>
                <SwapButton />
            </Box>
        </Box>
    );
}
