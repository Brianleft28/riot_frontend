const apiKey = 'RGAPI-c15430b2-2abb-4f25-8da0-b1ab23484e59'

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