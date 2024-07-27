import { Summoner } from "../types";

    interface PlayerInfoProps {
        summonerInfo: Summoner;
    }

const MatchHistory: React.FC<PlayerInfoProps>  = ({summonerInfo}) => {
    const { puuid } = summonerInfo
    console.log(puuid)
  
    return (
    <div>MatchHistory</div>
  )
}
export default MatchHistory