import { Summoner } from "../../../types";

interface PlayerInfoProps {
    summonerInfo: Summoner;
    username: string;
    tag: string;
    iconUrl: string;
  }
const PlayerInfo:React.FC<PlayerInfoProps> = ({ summonerInfo, username, tag, iconUrl }) => {
  
    return (
      <>
        <div className="flex flex-col justify-center gap-0.5 p-2 rounded">
          <div className="flex flex-row justify-around h-full mb-1 items-center">
            <p className="text-foreground/80 font-bold text-xl ">{username}</p>
            <p className="text-foreground/50">#{tag.toUpperCase()}</p>
          </div>

        <div>
          <img className="max-w-[150px] rounded-md border-foreground/30 border" src={iconUrl} alt="Profile Icon" />
            <div className="flex justify-center -mt-3">
              <div className="w-fit bg-white shadow-md text-foreground-100 font-bold px-2 rounded-md ">
                  {summonerInfo.summonerLevel}
              </div>
            </div>
        </div>
        </div>

      </>
  )
}
export default PlayerInfo