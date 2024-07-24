import { useEffect, useState } from "react"
import UserForm from "../components/features/userForm/UserForm"
import { Summoner } from "../types"
import { getProfileIconUrl } from "../services/accountServices"
import PlayerInfo from "../components/features/playerInfo/PlayerInfo"

const PlayerSearch = () => {
  const [summonerInfo, setSummonerInfo] = useState<Summoner>('' as unknown as Summoner)
  const [username, setUsername] = useState('')
  const [tag, setTag] = useState('')
  const [profileIconUrl, setProfileIconUrl] = useState('')
  const [ error, setError ] = useState(false)
  const [loading, setLoading] = useState(false) 
  const handleSumonnerInfo = (info: Summoner) => {
    setSummonerInfo(info)
  }

  useEffect( () => {
   const fetchProfileIcon = async () => {
     setError(false)
      setLoading(true)
     try {
       const url = await getProfileIconUrl(summonerInfo.profileIconId)
       setProfileIconUrl(url)
     } catch (error) {
       setError(true)
     } finally {
        setLoading(false)
     }
   }

   if(summonerInfo?.profileIconId) {
     fetchProfileIcon()
   }
  }, [summonerInfo])

  return (
    <>
    <div className="flex justify-center">
     <UserForm onSummonerInfo={handleSumonnerInfo} onUserName={setUsername} onTag={setTag}/>
    </div>
    {!loading && !error && summonerInfo && (
      <div className="flex justify-center md:justify-start mt-4 mx-0  md:mx-52">
      <PlayerInfo summonerInfo={summonerInfo} username={username} tag={tag} iconUrl={profileIconUrl}/>
    </div>
    )}
    </>
  )
}
export default PlayerSearch