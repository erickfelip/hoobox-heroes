import axios from "axios";

const publickey = "85a2617a16e84744592859bda3d15a8b";
const ts = "100";
const hash = "e00898b9d6c1cda10db2df49e53c06e1";

export const api = axios.create({
  baseURL: `https://gateway.marvel.com/v1/public/`,
  params: {
    ts,
    apikey: publickey,
    hash,
  },
});

export async function fetchHeroes() {
  try {
    const response = await api.get("/characters?limit=100");
    console.log("Resposta da API", response.data.data.results);
    return response.data.data.results;
  } catch (error) {}
}
