import { getAccountPuuid } from "../../../services/accountServices"
import { Button, Input } from "@nextui-org/react"

const UserForm = () => {

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try{
      const puuid = await getAccountPuuid(e.currentTarget.username.value, e.currentTarget.tag.value)
      console.log(puuid)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form onSubmit={handleForm} className="flex flex-col gap-2">
      <div key={'username'} className="max-w-xs">
       <Input id="username" name="username" type="username" variant={'underlined'} label="Game Name" />
      </div>
      <div key={'tagline'} className="max-w-xs">
       <Input id="tag" name="tag" type="tagname" variant={'underlined'} label="Tag Name" />
      </div>
      <Button color="primary" variant="bordered" type="submit">
        Buscar
      </Button>  
    </form>
  )
}
export default UserForm