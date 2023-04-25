import { useEffect } from "react";
import "./gameMemory.css";
import Card from "./components/card/Card";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import Marker from "./components/marker/Marker";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/slices/MemoryGameSlice";
import ModalAlert from "./components/modalAlert/ModalAlert";

const GameMemory = () => {
  const { userName } = useSelector((store) => store.login);
  const { dataGame, errors, hits } = useSelector((store) => store.memoryGame);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (!dataGame) {
    return (
      <div className="gameMemory">
        <LoadingSpinner />
        <h3>Cargando</h3>
      </div>
    );
  }

  return (
    <div className="container">
      {(errors === 10 || hits === 20) && <ModalAlert />}
      <div className="gameMemory">
        <div className="topHeader">
          <div className="align-items-center d-flex h-100 justify-content-start w-50">
            <h3>Hola, {userName}</h3>
          </div>
          <div className="align-items-center d-flex h-100 justify-content-end w-50">
            <Marker />
          </div>
        </div>
        <div className="card">
          {dataGame?.map((item, i) => (
            <Card
              img={item.fields.image.url}
              nameImg={item.fields.image.title}
              key={i}
              uuid={item.fields.image.uuid}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameMemory;
