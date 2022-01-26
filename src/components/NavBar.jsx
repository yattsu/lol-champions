import { Flex, Input, CloseButton } from '@chakra-ui/react';

export const NavBar = ({ query, handleSetQuery }) => {
  return(
    <>
      <Flex
        onChange={(e) => handleSetQuery(e.target.value)}
        justify='center'
        alignItems='center'
        p='2'
        w={['100%', 'null', '60%', '60%', '60%', '60%']}
      >
        <Input
          _focus={{}}
          placeholder='Search'
          bg='gray.100'
          border='none'
          value={query}
          color='gray.600'
          fontWeight='bold'
        />
        {
        query
        ?
          <CloseButton onClick={() => handleSetQuery('')}
            _focus={{}}
            color='gray.300'
          />
        :
          null
        }
      </Flex>
    </>
  )
}
