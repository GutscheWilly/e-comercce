const fetchProducts = async (query) => {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const response = await fetch(endpoint);
    const data = await response.json();

    return data.results;
};

export default fetchProducts;
