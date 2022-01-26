import { Flex } from '@chakra-ui/react';

export const Footer = () => {
  return(
    <Flex
      justify='center'
      py='16'
      bg='gray.800'
      color='gray.400'
      zIndex='20'
    >
      This app is not endorsed by Riot Games
    </Flex>
  )
}
