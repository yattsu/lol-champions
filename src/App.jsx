import React from 'react';
import { useState, useEffect } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { Flex, Image, Heading, Fade } from '@chakra-ui/react';

import { NavBar } from './components/NavBar';
import { Champions } from './components/Champions';
import { ChampCard } from './components/ChampCard';
import { Footer } from './components/Footer';

import poppy from './images/poppy.jpg';

const App = () => {
  const [query, setQuery] = useState('');
  const [tags, setTags] = useState([]);
  const [currentChamp, setCurrentChamp] = useState(null);
  const [currentBackground, setCurrentBackground] = useState(null);
  const [showChampCard, setShowChampCard] = useState(false);

  useEffect(() => {
    if(showChampCard) { 
      const bannerUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${currentChamp[1].id}_0.jpg`
      setCurrentBackground(bannerUrl)
    } else {
      setCurrentBackground(null)
    }
  }, [showChampCard, currentChamp])

  const handleSetQuery = (word) => {
    setQuery(word);
  }

  const handleSetTags = (tag) => {
    tags.includes(tag)
      ?
      setTags(tags.filter(item => item !== tag))
      :
      setTags([...tags, tag])
  }

  const handleCurrentChamp = (data) => {
    setCurrentChamp(data);
  }

  const handleShowChampCard = () => {
    setShowChampCard(!showChampCard);
  }

  return(
    <ChakraProvider>
      <Flex
        direction='column'
        alignItems='center'
        py={['null', 'null', '20']}
        bg='gray.50'
      >
        <Fade unmountOnExit in={showChampCard}>
        <Image src={currentBackground}
          position='fixed'
          w='full'
          h='full'
          fit='cover'
          top='0'
          left='0'
          pointerEvents='none'
          zIndex='10'
        />
        </Fade>
        <Flex
          position='relative'
          justify='center'
          h='400'
          mb='16'
        >
          <Image src={poppy}
            w='full'
            fit='cover'
            zIndex='0'
          />
          <Heading
            position='absolute'
            bottom='30%'
            size='3xl' 
            fontStyle='italic'
            fontWeight='bold'
            color='gray.50'
            textShadow='0px 0px 25px #000'
          >
            LOL CHAMPIONS
          </Heading>
        </Flex>
        <NavBar
          query = { query }
          handleSetQuery = { handleSetQuery }
        />
        <Flex
          w={['100%', 'null', '60%', '60%', '60%', '60%']}
          direction='column'
        >
          <Champions
            query={query}
            tags={tags}
            handleSetTags = { handleSetTags }
            handleCurrentChamp = { handleCurrentChamp }
            handleShowChampCard = { handleShowChampCard }
          />
          {
            showChampCard
              ?
        <Fade unmountOnExit in={showChampCard}>
              <ChampCard data={ currentChamp } handleShowChampCard={ handleShowChampCard } />
        </Fade>
              :
              null
          }
        </Flex>
      </Flex>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
