
    const API_URL = import.meta.env.VITE_API_URL;

export const fetchProdutosApi = async ()=>{
    return fetch(`${API_URL}/produtos`)
      .then(response => response.json())
      .then(json => {
        console.log({ json })
        return json?.data
      })
      .catch(error => console.log(error))
      .finally(() => console.log("Exemplo com fetch!!"))
}