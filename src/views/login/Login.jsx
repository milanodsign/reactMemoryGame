import React, { useState } from "react";
import "./login.css";
import logo from "../../assets/img/logo.png";
import { useDispatch } from "react-redux";
import { setUserName } from "../../store/slices/Loginslice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUserName = (e) => {
    setUser(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUserName(user));
    navigate('/memoryGame')
  };
  return (
    <div className="container h-100">
      <div className="login">
        <div className="cardCustom">
          <img src={logo} alt="Logo Memory Game" className="logoLogin" />
          <h3>Crea tu jugador</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="nameUser">Nombre de Usuario</label>
              <input
                id="nameUser"
                type="text"
                className="form-control form-control-lg"
                value={user}
                onChange={handleUserName}
              />
            </div>
            <div className="form-group">
              <button type="submit">Iniciar Juego</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
