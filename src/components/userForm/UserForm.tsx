import { useState } from "react"
import { getAccountPuuid } from "../../services/accountServices"

const UserForm = () => {

  const [username, setUsername] = useState<string>('')
  const [tag, setTag] = useState<string>('')

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUsername(e.currentTarget.username.value)
    setTag(e.currentTarget.tag.value)
    console.log({ username, tag })
    try{
      const puuid = await getAccountPuuid(e.currentTarget.username.value, e.currentTarget.tag.value)
      console.log(puuid)
    } catch (error) {
      console.error(error)
    }
  }


  return (
    <form onSubmit={handleForm}>
        <label htmlFor="name">Username:</label>
        <input type="text" id="username" name="username" placeholder="username" />
        <label htmlFor="tag">Tag:</label>
        <input type="tag" id="tag" name="tag" placeholder="tag" />
        <button type="submit">Enviar</button>
    </form>
  )
}
export default UserForm