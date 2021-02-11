import AsyncStorage from '@react-native-community/async-storage';

export default async function generateHeaders() {
  const token = await AsyncStorage.getItem('jwt');

  return {
    headers: {
      Authorization: `Bearer: ${token}`
    }
  };
}
