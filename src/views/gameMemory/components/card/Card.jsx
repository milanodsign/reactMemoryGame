import { useEffect, useState } from "react";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../../../store/slices/MemoryGameSlice";
import flipCard from "../../../../assets/sound/flipcard.mp3";

const Card = ({ img, nameImg, key, uuid }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMatched, setIsMatched] = useState(false);
  const { error, itemsSuccefull } = useSelector(
    (store) => store.memoryGame
  );
  const dispatch = useDispatch();

  const fCard = new Audio(flipCard);
  fCard.volume = 0.1;

  const handleOpenCard = () => {
    if (isOpen || isMatched) return;
    setIsOpen(true);
    fCard.play();
    dispatch(getItems(uuid));
    const openCards = document.querySelectorAll(".cardGame .active");
    if (openCards.length === 1) {
      const otherUuid = openCards[0].id;
      if (uuid === otherUuid) {
        setIsMatched(true);
      } else {
        setTimeout(() => {
          handleCloseCard();
          document.getElementById(otherUuid).classList.remove("active");
        }, 1000);
      }
    }
  };


  const handleCloseCard = () => {
    setIsOpen(false);
  };
  
  useEffect(() => {
    const handleTimeout = () => {
      handleCloseCard();
    };

    const foundItem = itemsSuccefull.includes(uuid);

    if (!foundItem) {
      if (error && !isMatched) {
        const timeoutId = setTimeout(handleTimeout, 1500);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [error, isMatched, itemsSuccefull, handleCloseCard, uuid]);

  return (
    <div key={key} className="cardGame" onClick={handleOpenCard}>
      <div id={uuid} className={isOpen ? "contenCard active" : "contenCard"}>
        <span className="cardFront">?</span>
        <span className="cardBack">
          <img src={img} alt={nameImg} title={nameImg} />
        </span>
      </div>
    </div>
  );
};

export default Card;
