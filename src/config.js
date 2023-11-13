const appId ="b446eae7"

const appKey = "a45674ce408c9413c792ba4ad94a3bca"

export const api = (query,from,to)=>{
    return `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=${from}&to=${to}`
}

