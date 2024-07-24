import { getAccountPuuid, getSummonnerInfoByPuuid } from "../../../services/accountServices"
import { Button, Input } from "@nextui-org/react"
import { Summoner } from "../../../types"
import {  useState } from "react"


interface UserFormProps {
  onSummonerInfo: (info: Summoner) => void,
  onUserName: (username: string) => void,
  onTag: (tag: string) => void
}

const UserForm: React.FC<UserFormProps> = ({onSummonerInfo, onUserName, onTag}) => {

  const [username, setUsername] = useState('')
  const [tag, setTag] = useState('')

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
      // Obtener el puuid del usuario  
      const response = await getAccountPuuid(e.currentTarget.username.value, e.currentTarget.tag.value)
      const puuid = response.puuid
      // Obtener la información del usuario con el puuid
      const summonerInfo = await getSummonnerInfoByPuuid(puuid)
      console.log(summonerInfo)
      onSummonerInfo(summonerInfo)
      onUserName(username)
      onTag(tag)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form onSubmit={handleSearch} className="flex flex-col gap-2">
      <div key={'username'} className="max-w-xs">
       <Input onChange={(e)=> setUsername(e.target.value)} id="username" name="username" type="username" variant={'underlined'} label="Game Name" />
      </div>
      <div key={'tagline'} className="max-w-xs">
       <Input onChange={(e)=> {setTag(e.target.value)}} id="tag" name="tag" type="tagname" variant={'underlined'} label="Tag Name" />
      </div>
      <Button color="primary" variant="bordered" type="submit">
        Buscar
      </Button>  
    </form>
  )
}
export default UserForm