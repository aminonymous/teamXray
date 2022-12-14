import style from "./Players.module.css";
import { useLocation } from "react-router-dom";
const CartPlayer = ({ player }) => {
  let { pathname } = useLocation();
  return (
    <div
      className={`${style.flipCard} ${
        pathname === "/" ? "w-auto" : "w-[350px]"
      }`}
    >
      <div className={style.cardInner}>
        <div className={style.cardFront}>
          {pathname === "/" ? (
            <img
              src={player.img}
              alt="Avatar"
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <img
              src={`${process.env.REACT_APP_BASE_URL}/${player.image}`}
              alt="Avatar"
              style={{ width: "100%", height: "100%" }}
            />
          )}
        </div>
        <div className={style.cardBack}>
          <h2>xray team</h2>
          <p>{player.name}</p>
          <p>{player.game}</p>
          <section className="flex justify-between">
            {player.instagram === "#" ? null : (
              <a
                href={player.instagram}
                className="flex-grow text-3xl py-2 bg-red-400 hover:bg-red-500 hover:text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
            )}
            {player.youtube === "#" ? null : (
              <a
                href={player.youtube}
                className="flex-grow text-3xl py-2 bg-red-500 hover:bg-red-600 hover:text-white"
              >
                <i className="fab fa-youtube"></i>
              </a>
            )}
            {player.twitch === "#" ? null : (
              <a
                href={player.twitch}
                className="flex-grow text-3xl py-2 bg-purple-500 hover:bg-purple-600 hover:text-white"
              >
                <i className="fab fa-twitch"></i>
              </a>
            )}
            {player.twitter === "#" ? null : (
              <a
                href={player.twitter}
                className="flex-grow text-3xl py-2 bg-blue-400 hover:bg-blue-500 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default CartPlayer;
