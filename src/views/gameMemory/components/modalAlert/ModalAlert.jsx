import { useSelector } from "react-redux";
import "./ModalAlert.css";
import cup from "../../../../assets/img/cup.png";
import { useEffect } from "react";
import gameOver from "../../../../assets/sound/gameOver.mp3";
import winner from "../../../../assets/sound/winner.mp3";

const ModalAlert = () => {
  const { errors, hits } = useSelector((store) => store.memoryGame);
  const { userName } = useSelector((store) => store.login);

  const handleReset = () => {
    window.location.reload();
  };
  useEffect(() => {
    const gameOverSound = new Audio(gameOver);
    gameOverSound.volume = 0.1;
    const winnerSound = new Audio(winner);
    winnerSound.volume = 0.1;
    errors === 10 && gameOverSound.play();
    hits === 20 && winnerSound.play();
  }, [errors, hits]);

  return (
    <div className="containerModal">
      <div
        className={
          errors === 10 || hits === 20 ? "backdrop active" : "backdrop"
        }
      >
        <div className="modal">
          {errors === 10 && (
            <>
              <span className="gameOver">GAME OVER</span>
              <button className="resetGame" onClick={handleReset}>
                RESET GAME
              </button>
            </>
          )}
          {hits === 20 && (
            <>
              <img className="cupWinner" src={cup} alt="" />
              <span className="userName">{userName}</span>
              <span className="winner">Congratulations you have Succeeded</span>
              <button className="resetGame" onClick={handleReset}>
                RESET GAME
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalAlert;
