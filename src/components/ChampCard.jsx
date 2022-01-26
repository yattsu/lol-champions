import { Flex, Image, CloseButton, Badge, Heading, Text, CircularProgress, CircularProgressLabel, Progress, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

export const ChampCard = ({ data, handleShowChampCard }) => {
  const bannerUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${data[1].id}_0.jpg`

  return(
    <Flex
      position='fixed'
      w='100%'
      h='100%'
      left='0'
      top='0'
      justify='center'
      alignItems='center'
      bgGradient='linear(to-b, transparent, gray.700)'
      zIndex='20'
    >
      <Flex
        position='relative'
        w='80%'
        h='70%'
        bg='gray.800'
        color='gray.300'
        w={['100%', '100%', '80%', '80%', '60%', '60%']}
        h={['100%', '100%', '70%', '70%', '70%', '70%']}
        justify='center'
        direction='column'
        rounded='lg'
        overflow='hidden'
        shadow='2xl'
      >
        <Flex
          position='absolute'
          w='100%'
          h='70%'
          top='0'
          overflow='hidden'
        >
          <Image src={bannerUrl}
            w='100%'
            fit='cover'
          />
          <Flex
            position='absolute'
            left='10%'
            bottom='15%'
            direction='column'
            textAlign='left'
          >
            <Heading
              color='gray.100'
              size='2xl'
              textShadow='-2px 3px 16px #111'
            >
              {data[1].name}
            </Heading>
            <Text
              color='gray.200'
              fontStyle='italic'
              textShadow='0px 0px 5px #111'
              fontWeight='bold'
            >
              {data[1].title}
            </Text>
          </Flex>
        </Flex>
        <CloseButton
          position='absolute'
          color='gray.500'
          bg='gray.800'
          size='md'
          right='2'
          top='2'
          onClick={ handleShowChampCard }
          zIndex='10'
        />


        <Flex
          position='absolute'
          h='100%'
          w='100%'
          overflowY='scroll'
        >
          <Flex
            position='absolute'
            justify='right'
            px='5'
            py='3'
            bottom='30%'
            right='8'
            bg='gray.800'
            roundedTop='md'
            gap='2'
          >
            <Flex
              direction='column'
              w='100px'
              textAlign='left'
            >
              <Text
                fontSize='xs'
              >
                {data[1].partype}
              </Text>
              <Progress value={100}
                size='sm'
                colorScheme={{
                  'Blood Well': 'red',
                  'Mana': 'blue',
                  'Energy': 'yellow',
                  'None': 'gray',
                  'Rage': 'yellow',
                  'Courage': 'white',
                  'Shield': 'gray',
                  'Fury': 'red',
                  'Ferocity': 'white',
                  'Heat': 'yellow',
                  'Grit': 'white',
                  'Crimson Rush': 'red',
                  'Flow': 'blue'
                }[data[1].partype]}
              />
            </Flex>
            {data[1].tags.map(role => (
              <Badge
                key={role}
                variant='subtle'
                bg='gray.700'
                color='gray.400'
                fontWeight='bold'
                px='2'
                py='1'
              >
                {role}
              </Badge>
            ))}
          </Flex>
          <Flex
            position='absolute'
            top='70%'
            bg='gray.800'
            p='3'
            w='100%'
            direction='column'
          >
            <Flex
              px='10'
              bg='gray.700'
              color='gray.400'
              textAlign='center'
              p='8'
              direction='column'
              gap='5'
              fontStyle='italic'
              rounded='xl'
            >
              <Flex>
                {
                 Object.entries(data[1].info).map(stat => (
                    <Flex key={stat} w='100%' justify='center'>
                      <CircularProgress value={stat[1]}
                        max='10'
                        size='20'
                        thickness='16'
                        color={{
                          attack: 'red.500',
                          defense: 'green.500',
                          magic: 'blue.500',
                          difficulty: 'orange.500'
                        }[stat[0]]}
                      >
                        <CircularProgressLabel fontSize='sm' >
                          {stat[0]}
                        </CircularProgressLabel>
                      </CircularProgress>
                    </Flex>
                  ))
                }
              </Flex>
              <Flex
                direction='column'
                color='gray.400'
              >
                {data[1].blurb}
              </Flex>
            </Flex>
            <Flex
              id='stats'
              wrap='wrap'
              justify='center'
              textAlign='center'
              gap='3'
              pt='3'
              direction='row'
            >
              {
                Object.entries(data[1].stats).map(stat => (
                  <Stat
                    key={stat}
                    bg='gray.700'
                    p='2'
                    rounded='xl'
                    minW={['movespeed', 'attackrange'].includes(stat[0]) ? '100%' : '45%'}
                  >
                    <StatLabel
                      fontWeight='bold'
                      fontSize='md'
                      color='gray.500'
                    >
                      {{
                        armor: 'Armor',
                        armorperlevel: 'Armor per level',
                        attackdamage: 'Attack DMG',
                        attackdamageperlevel: 'Attack DMG per level',
                        attackrange: 'Attack range',
                        attackspeed: 'Attack speed',
                        attackspeedperlevel: 'Attack speed per level',
                        crit: 'Crit',
                        critperlevel: 'Crit per level',
                        hp: 'HP',
                        hpperlevel: 'HP per level',
                        hpregen: 'HP regen',
                        hpregenperlevel: 'HP regen per level',
                        movespeed: 'Move speed',
                        mp: 'MP',
                        mpperlevel: 'MP per level',
                        mpregen: 'MP regen',
                        mpregenperlevel: 'MP regen per level',
                        spellblock: 'Spell block',
                        spellblockperlevel: 'Spell block per level'
                      }[stat[0]]}
                    </StatLabel>
                    <StatNumber>
                      {stat[1]}
                    </StatNumber>
                  </Stat>
                ))
              }
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
