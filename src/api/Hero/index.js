import api from '../../services/api';

export default function createHeroApi() {
  const findByName = async (name) => {
    try {
      const response = await api.get(
        `/search/${String(name).replace(' ', '%20')}`
      );
      return response;
    } catch (e) {
      console.log('Error:', e);
    }
  };

  return {
    findByName,
  };
}
