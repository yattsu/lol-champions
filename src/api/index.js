import axios from 'axios';

export const getVersion = async () => {
  const url = 'https://ddragon.leagueoflegends.com/api/versions.json';

  const result = await axios.get(url);

  return result.data[0];
}

export const getChampions = async () => {
  const version = await getVersion();
  const url = `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`;

  const result = await axios.get(url);

  return result.data.data;
}
