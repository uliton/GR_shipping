import React, { useState } from "react";
import { getAccess } from "../../framework/access";
import { AdminCalc } from "../../components/AdminCalc";
import "./Admin.scss";

export const Admin: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState<string>('');
  const [access, setAccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onSubmit = (e: any) => {
    e.preventDefault();

    const access = getAccess();

    if (access.login.toLowerCase() === login.toLowerCase() && access.password === password.toLowerCase()) {
      setAccess(true);
    } else {
      setError('login ore password is wrong');
      setLogin('');
      setPassword('');
    }
  }

  return (
    <>
      {access
        ? (
          <AdminCalc />
        )
        : (
          <form onSubmit={onSubmit} className="admin">
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
              type="submit"
              className="admin__button"
            >
              LOGIN
            </button>

            <p style={{color: "#880027"}}>
              {error}
            </p>
          </form>

        )
      }
    </>
  );
};
