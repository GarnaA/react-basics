import './App.css'

const App = () => {
  return (
    <main className='app'>
      <div className='root'>
        <label htmlFor='name'>Enter your name</label>
        <br />
        <input className='input' id="name" type='text'></input>
      </div>
      <div className='root'>
        <label htmlFor='proficiency'> </label>
        <br />
        <select name='proficiency' className='select'>
          <option value='good'>React</option>
          <option value='great'>Angular</option>
          <option value='super'>Vue</option>
        </select>
      </div>
      <div className='root'>
        <label htmlFor='experience'>Expierence</label>
        <br />
        <input className='input' type='number' id='experience'></input>
      </div>
    </main>
  )
}

export default App
