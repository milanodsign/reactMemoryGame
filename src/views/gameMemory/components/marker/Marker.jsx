import React from "react";
import "./marker.css";
import { useSelector } from "react-redux";

const Marker = () => {
  const { hits, errors } = useSelector((store) => store.memoryGame);
  const handleReset = () => {
    window.location.reload();
  };
  return (
    <div className="markerCont">
      <div className="markerGame">
        <div className="hitsGame">
          <span className="titleMarker">Aciertos</span>
          <span className="total">{hits}</span>
        </div>
        <div className="errorsGame">
          <span className="titleMarker">Errores</span>
          <span className="total">{errors}</span>
        </div>
      </div>
      <div className="resetGame">
        <button type="button" onClick={handleReset}>
          Reiniciar Juego
        </button>
      </div>
    </div>
  );
};

export default Marker;
