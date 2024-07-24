import { useEffect } from "react";
import { Summoner } from "../../../types";

interface PlayerInfoProps {
    summonerInfo: Summoner;
    username: string;
    tag: string;
    iconUrl: string;
  }
const PlayerInfo:React.FC<PlayerInfoProps> = ({ summonerInfo, username, tag, iconUrl }) => {
  
    useEffect(() => {
        // Add any additional logic here
        console.log(summonerInfo);
    }, [summonerInfo, username, tag, iconUrl]);

    return (
    <div className="flex flex-col justify-center gap-0.5 border p-2 rounded border-foreground-100">
    {/* Render the player information here */}
    <div className="flex justify-around">
    <p>{username}</p>
    <p>#{tag.toUpperCase()}</p>
    </div>
    <img className="max-w-[150px]" src={iconUrl} alt="Profile Icon" />
    <div>
        Summoner level: {summonerInfo.summonerLevel}
    </div>
    {/* Add more details as needed */}
  </div>
  )
}
export default PlayerInfo