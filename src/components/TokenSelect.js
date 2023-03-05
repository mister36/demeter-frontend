import { Button, Image, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function TokenSelect({ value, image, button, title }) {
    return value !== undefined ? (
        <Button
            bg="white"
            borderRadius="1.12rem"
            boxShadow="rgba(0, 0, 0, 0.075) 0px 6px 10px"
            fontWeight="500"
            mr="0.5rem"
            color="black"
        >
            <Image boxSize="1.5rem" src={image} alt="Logo" mr="0.5rem" />
            {value}
        </Button>
    ) : (
        <Button
            bg="rgb(76, 130, 251)"
            color="white"
            p="0rem 1rem"
            borderRadius="1.12rem"
        >
            {title}
        </Button>
    );
}
