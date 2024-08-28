//import { useContext } from 'react';
import { useState } from 'react';
//import { createContext } from 'react';
import { useEffect } from 'react';
import { UserContext, useUserData } from './user-context';
import './App.css';

const userData = {
  userName: 'Vitalii',
  age: 0,
  email: 'email@gmail.com',
  isConfirmed: false,
  //confirmUserAccount: function () {},
};

export default function App() {
  const [user, setUser] = useState(null);
  useEffect(() => setUser(userData), []);
  const confirmUserAccount = () => {
    setUser({ ...user, isConfirmed: true });
  };

  return (
    <div className="component-1 component">
      {user ? (
        <UserContext.Provider value={{ ...user, confirmUserAccount }}>
          <Main confirmUserAccount={ confirmUserAccount } />
        </UserContext.Provider>
      ) : (
        'loading'
      )}
    </div>
  );
}

function Main() {
  return (
    <main className="component-2 component">
      <UserCard />
    </main>
  );
}

function UserCard() {
  const { userName, isConfirmed } = useUserData();

  return (
    <div className="component-3 component">
      <h1>
        Hello, { userName } { isConfirmed ? '(Verified)' : '(Unconfirmed)'}
      </h1>
      <UserInfo />
    </div>
  );
}

function UserInfo() {
  const { userName, age, email, isConfirmed, confirmUserAccount } = 
    useUserData();

  return (
    <div className="component-4 component">
      <p>Name: { userName }</p>
      <p>Age: { age }</p>
      <p>Email: { email }</p>
      { isConfirmed ? (
        'Account Confirmed'
      ) : (
        <button onClick={confirmUserAccount} type="button">
          Please confirm the account
        </button>
      )}
    </div>
  );
}
