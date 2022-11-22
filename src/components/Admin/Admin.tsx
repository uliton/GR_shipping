import React, { useState } from "react";
import { useNavigate } from "react-router";
import { getAccess } from "../../framework/access";
import "./Admin.scss";

export const Admin: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleClick = () => {
    const access = getAccess();

    if (access.login.toLowerCase() === login.toLowerCase() && access.password === password) {
      navigate('/admin/calculator')
    } else {
      setError('login ore password is wrong');
      setLogin('');
      setPassword('');
    }
  }

  return (
    <div className="admin">
      <input
        type="text"
        className="admin__input"
        placeholder="Login"
        value={login}
        onChange={e => setLogin(e.target.value)}
      />
      
      <input
        type="password"
        className="admin__input"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <button
        type="button"
        className="admin__button"
        onClick={handleClick}
      >
        LOGIN
      </button>

      <p style={{color: "#880027"}}>
        {error}
      </p>
    </div>
  );
};
