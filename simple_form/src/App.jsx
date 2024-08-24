import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({});
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [isComfirmed, setConfirmed] = useState(false);

  const confirmUserData = (data) => {
    setUser(data);
    setConfirmationOpen(true);
  };

  const closeDialog = () => setConfirmationOpen(false);

  const confirm = () => {
    closeDialog();
    setConfirmed(true);
  };
  return (
    <>
      <main>
        {isComfirmed ? (
          `Congratulation user ${user.email}` 
        ) : ( 
          <RegisterForm onSubmit={confirmUserData}/>
        )}
      </main>
      <ConfirmDialog 
        title="Please confirm registration" 
        cancel={closeDialog} 
        open={confirmationOpen}
        confirm={confirm}
      >
        <p>Please confirm your email: {user.email}</p>
      </ConfirmDialog>
    </>
  )
}

function RegisterForm({onSubmit}){
  const [user, setUserData] = useState({email: '', password: ''});

  const setUserEmail = (e) => {
    const email = e.target.value;
    setUserData({...user, email});
    //setUserData({
      //email: e.target.value,
      //password: user.password,
    //})
  };
  const setUserPassword = (e) => {
    const password = e.target.value;
    setUserData({...user, password});
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { email, password } = user;

    if(!email.includes('@')) {
      return;
    }

    if (!password.trim()){
      return;
    }

    console.log('submitted');

    onSubmit(user);
  }
  return (
    <>
      <h1>Please, register</h1>

      <form onSubmit={handleFormSubmit}>
        <AppInput
          name="email"
          label="Email"
          type="emai"
          onChange={setUserEmail}
          value={user.email}
          required={true}
        />

        <AppInput
          name="pwd"
          label="Password"
          type="password"
          onChange={setUserPassword}
          value={user.password}
          required={true}
        />

        {JSON.stringify(user)}

        <button>Submit</button>
      </form>
    </>
  )
}

function ConfirmDialog({title, children, confirm, cancel, open}) {
  return (
    <dialog open={open}>
      <div>{title}</div>
      <div>{children}</div>
      <div>
        <button type="button" onClick={confirm}>
          Confirm
        </button>
        <button type="button" onClick={cancel}>
          Cancel
        </button>
      </div>
    </dialog>
  )
}

function AppInput({label, name, ...rest}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} {...rest} />
    </div>
  )
}

export default App
