import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
  const { loading, request, error, clearError } = useHttp();

  const _apiBase = "https://gateway.marvel.com:443/v1/public/";
  const _apiKey = "apikey=b43136c206a07d7e1f6e7ba7d311c764";
  const _baseOffsetCharacter = 1000;
  const _baseOffsetComics = 1332;

  const getAllCharacters = async (offset = _baseOffsetCharacter) => {
    const res = await request(
      `${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformCharacter);
  };

  const getCharacter = async (id) => {
    const res = await request(
      `${_apiBase}characters/${id}?${_apiKey}`
    );
    return _transformCharacter(res.data.results[0]);
  };

  const getAllComics = async (offset = _baseOffsetComics) => {
    const res = await request(
      `${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`
    );
    return res.data.results.map(_transformComics);
  };

  const getComic = async (id) => {
    const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    return _transformComics(res.data.results[0]);
  };

  const _transformCharacter = (char) => {
    return {
      id: char.id,
      name: char.name,
      description: char.description
        ? `${char.description.slice(0, 210)}...`
        : "There is no description for this character",
      thumbnail: char.thumbnail.path + `.${char.thumbnail.extension}`,
      homepage: char.urls[0].url,
      wiki: char.urls[1].url,
      comics: char.comics.items
        ? char.comics.items.slice(0, 10)
        : null,
    };
  };

  const _transformComics = (comics) => {
    return {
      id: comics.id,
      title: comics.title,
      description: comics.description
        ? comics.description
        : "There is no description for this comics",
      thumbnail:
        comics.thumbnail.path + `.${comics.thumbnail.extension}`,
      price: comics.prices[0].price
        ? `${comics.prices[0].price} $`
        : "Not Available",
      pageCount: comics.pageCount,
      language: comics.textObjects[0]?.language || "en-us",
    };
  };

  return {
    loading,
    error,
    getAllCharacters,
    getAllComics,
    getComic,
    getCharacter,
    clearError,
  };
};

export default useMarvelService;
