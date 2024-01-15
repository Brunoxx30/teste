const key = import.meta.env.VITE_TOKEN;
const API_KEY_URL = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${key}&q=`;

export const searchCities = async (term) => {
  const resposta = await fetch(`${API_KEY_URL}${term}`);
  const data = await resposta.json();
  if (data.length === 0) {
    window.alert('Nenhuma cidade encontrada');

    return [];
  } return data;
};
const newUrl = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${key}&q=`;

export const getWeatherByCity = async (cityUrl) => {
  const resposta = await fetch(`${newUrl}${cityUrl}`);
  const { location, current } = await resposta.json();
  const obj = {
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
    country: location.country,
    name: location.name,
    url: cityUrl,
  }; return obj;
};
