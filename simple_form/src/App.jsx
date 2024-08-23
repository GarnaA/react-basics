import './App.css'

function App() {
  return (
    <>
      <main>
        <RegisterForm/>
      </main>
      <ConfirmDialog/>
    </>
  )
}

function RegisterForm(){
  return (
    <>
      <h1>Please, register</h1>

      <form onSubmit={() => console.log('done')}>
        <AppInput
          name="email"
          label="label"
          type="emai"
          onChange={console.log}
          required={true}
        />

        <AppInput
          name="pwd"
          label="Password"
          type="email"
          onChange={console.log}
          required={true}
        />

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
