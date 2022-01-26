import { Flex, Text, Image } from '@chakra-ui/react';

export const Champ = ({ data, version, handleCurrentChamp, handleShowChampCard }) => {
  const name = data[1].name;
  const icon = data[1].image.full;
  const imageUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${icon}`;

  return(
    <Flex
      onClick={() => {handleCurrentChamp(data); handleShowChampCard()}}
      _hover={{
        shadow: 'xl',
        transform: ['scale(1.1)'],
      }}
      transitionDuration='.1s'
      color='gray.600'
      cursor='pointer'
      direction='column'
      bg='gray.100'
      m='3'
      rounded='lg'
      shadow='lg'
      align='center'
    >
      <Image
        src={imageUrl}
        boxSize='32'
      />
      <Text
        fontStyle='italic'
        fontWeight='bold'
        bg='blue.700'
        w='100%'
        p='1'
        pl='2'
        fontSize='sm'
        color='gray.100'
      >
        { name.toUpperCase() }
      </Text>
    </Flex>
  )
}
