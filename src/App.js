import React, {useState} from 'react'

function App() {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
      const value = e.target.value
      setValue(value)
  }

  const handleClick = () => {
      alert(value)
  }

  return (
    <div className="App">
      <input type="text" placeholder="Write text" onChange={e => handleChange(e)} />
      <button onClick={() => handleClick() }>Alert Text</button>
    </div>
  );
}

export default App;
