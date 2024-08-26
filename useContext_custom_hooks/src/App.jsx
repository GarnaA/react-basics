import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

const userData = {
  userName: 'Vitalii',
  age: 100,
  email: 'my-email@gmail.com',
  isConfirmed: false,
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
        <Main user={ user } confirmUserAccount={ confirmUserAccount } />
      ) : (
        'loading'
      )}
    </div>
  );
}

function Main({ user, confirmUserAccount }) {
  return (
    <main className="component-2 component">
      <UserCard confirmUserAccount={ confirmUserAccount } user={ user } />
    </main>
  );
}

function UserCard({ user, confirmUserAccount }) {
  const { userName, isConfirmed } = user;
  return (
    <div className="component-3 component">
      <h1>
        Hello, { userName } { isConfirmed ? '(Verified)' : '(Unconfirmed)'}
      </h1>
      <UserInfo user={ user } confirmUserAccount={ confirmUserAccount} />
    </div>
  );
}

function UserInfo({
  user: { age, email, userName, isConfirmed },
  confirmUserAccount,
}) {
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
