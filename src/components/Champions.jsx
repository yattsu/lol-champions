import { Checkbox, Flex, Spinner, Text, Divider, Fade } from '@chakra-ui/react';

import { useState, useEffect } from 'react';
import { getVersion, getChampions } from '../api';

import { Champ } from './Champ';

export const Champions = ({ query, tags, handleSetTags, handleCurrentChamp, handleShowChampCard }) => {
  const [version, setVersion] = useState(null);
  const [champions, setChampions] = useState(null);

  useEffect(() => {
    (async function () {

      setVersion(await getVersion());
      setChampions(await getChampions());

    })()
  }, [])

  if(!champions) {
    return(
      <>
      <Text>Loading...</Text> <Spinner />
      </>
    )
  }

  return(
    <Flex
      direction='row'
      wrap='wrap'
      justify='center'
    >
      <Flex
        direction='row' 
        justify='center'
        w='100%'
        wrap='wrap'
      >
        {
          [
            'Marksman',
            'Assassin',
            'Support',
            'Mage',
            'Tank',
            'Fighter',
          ]
          .map(
            role =>
              <Checkbox
                key={role}
                mx='1'
                _checked={{
                  fontWeight: 'bold'
                }}
                onChange={() => handleSetTags(role)}
              >
                {role}
              </Checkbox>
          )
        }
      </Flex>
      <Divider
        my='8'
      />
      {
        (
          Object.entries(champions)
          .filter(
            champ => champ[1].name.toLowerCase().includes(query ? query.toLowerCase() : '')
          )
          .filter(
            champ => {
              return tags.length > 0
                ?
                tags.every(tag => champ[1].tags.includes(tag))
                :
                true
              }
          )
          .map(champ => (
            <Fade key={champ[0]} unmountOnExit in={champions}>
            <Champ
              key={champ[0]}
              data={champ}
              version={version}
              handleCurrentChamp = { handleCurrentChamp }
              handleShowChampCard = { handleShowChampCard }
            />
            </Fade>
          ))
        )
      }
    </Flex>
  )
}
