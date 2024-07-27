import { useEffect, useState } from "react"
import UserForm from "../components/features/userForm/UserForm"
import { Summoner } from "../types"
import { getProfileIconUrl } from "../services/accountServices"
import PlayerInfo from "../components/features/playerInfo/PlayerInfo"
import MatchHistory from "./MatchHistory"
import ButtonReutilizable from "../components/common/Button"

const PlayerSearch = () => {
  const [summonerInfo, setSummonerInfo] = useState<Summoner>('' as unknown as Summoner)
  const [username, setUsername] = useState('')
  const [tag, setTag] = useState('')
  const [profileIconUrl, setProfileIconUrl] = useState('')
  const [ error, setError ] = useState(false)
  const [loading, setLoading] = useState(false) 

  const resetSummonerInfo = () => {
    setSummonerInfo('' as unknown as Summoner)
  }

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
    {!summonerInfo && (     
    <div className="flex justify-center">
     <UserForm onSummonerInfo={handleSumonnerInfo} onUserName={setUsername} onTag={setTag}/>
    </div>
    ) 
    }
    {!loading && !error && summonerInfo && (
      <>
      <div className="flex flex-col justify-center md:justify-start gap-3 md:gap-2 mt-1 items-center md:items-start md:mx-52">
        <div>
          <div>
          <PlayerInfo summonerInfo={summonerInfo} username={username} tag={tag} iconUrl={profileIconUrl}/>
          </div>
          <div>
            <ButtonReutilizable  children={'Realizar otra busqueda'} onClick={resetSummonerInfo}/>
          </div>
        </div>
      </div>

      <div className="flex md:mx-52 mx-auto justify-center md:justify-start px-3 mt-4 items-center">
      <MatchHistory summonerInfo={summonerInfo}/>
      </div>
      </>
    )}
    </>
  )
}
export default PlayerSearch