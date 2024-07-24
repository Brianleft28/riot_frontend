const apiKey = 'RGAPI-2aa210e9-61dd-4a41-924f-05483d2c08a1'

export const getAccountPuuid = async (username: string, tag: string) => {
    if (!apiKey) {
        throw new Error('API key is not defined');
    }
    const url = `http://localhost:3000/account/acc/${username}/${tag}`
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'api_key': apiKey
        },
    
    }

    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getSummonnerInfoByPuuid = async (puuid: string) => {
    if(!apiKey) {
        throw new Error('API key is not defined')
    }
    const url = `http://localhost:3000/account/summoner/${puuid}`
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'api_key': apiKey
        }
    };
    try {
        const response = await fetch(url, options)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getProfileIconUrl = async (profileIconId: number) => {
    return `https://ddragon.leagueoflegends.com/cdn/14.14.1/img/profileicon/${profileIconId}.png`
}