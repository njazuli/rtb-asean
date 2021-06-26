export const Player = ({ id }) => {
  const player_link = `https://rtb-player.glueapi.io/latest/h/${id}`;
  return (
    <>
      <div className="w-100">
        <div className="ratio ratio-16x9">
          <iframe src={player_link}></iframe>
        </div>
      </div>
    </>
  );
};

export default Player;
