import { useEffect, useState } from "react"
import UserForm from "../components/features/userForm/UserForm"
import { Summoner } from "../types"

const PlayerSearch = () => {
  const [summonerInfo, setSummonerInfo] = useState(null as Summoner | null)
  const [username, setUsername] = useState('')
  const [tag, setTag] = useState('')

  const handleSumonnerInfo = (info: Summoner) => {
    setSummonerInfo(info)
  }
  useEffect(() => {
    console.log(summonerInfo)
    console.log(username)
    console.log(tag)
  }, [summonerInfo, username, tag])
  return (
    <div className="flex ">
     <UserForm onSummonerInfo={handleSumonnerInfo} onUserName={setUsername} onTag={setTag}/>
    </div>
  )
}
export default PlayerSearch