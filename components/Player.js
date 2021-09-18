export const Player = ({ id }) => {
  const player_link = `https://rtb-player.glueapi.io/latest/h/${id}`;
  return (
    <>
      <div className="w-100 player-border ">
        <div className="ratio ratio-16x9">
          {id ? (
            <iframe src={player_link} allowFullScreen></iframe>
          ) : (
            <iframe className="bg-black"></iframe>
          )}
        </div>
      </div>
    </>
  );
};

export default Player;
