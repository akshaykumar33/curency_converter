import { useState } from 'react';
import './App.css';
import MyIcon from './assets/icon.svg';

function App() {
  const [amount, setAmount] = useState('');
  const [fromOption, setfromOption] = useState('');
  const [toOption, setToOption] = useState('');
  const [value, setValue] = useState('');
  const [trues, setTrues] = useState(false);

  function handleConverter(e) {
    e.preventDefault();
    setTrues(true);

    const amountNumber = parseFloat(amount);

    if (isNaN(amountNumber)) {
      alert("Please enter a valid number for amount");
      return;
    }

    if (fromOption === 'inr' && toOption === 'djf') {
      setValue(amountNumber * 2.17);
    } else {
      alert("Please select the 'From' and 'To' currencies properly");
    }
  }

  const handleFromSelectChange = (event) => {
    setfromOption(event.target.value);
  };

  const handleToSelectChange = (event) => {
    setToOption(event.target.value);
  };

  return (
    <main>
      <h1>Currency converter</h1>
      <div className="card">
        <form onSubmit={handleConverter}>
          <div className='outerFlex'>
            <div className='innerFlex'>
              <label htmlFor='amount'>Amount</label>
              <input type="text" id='amount' value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder={'Enter Amount'} />
            </div>
            <div className='innerFlex'>
              <label htmlFor='from'>From</label>
              <select value={fromOption} onChange={handleFromSelectChange}>
                <option value="">Select an option</option>
                <option value="inr">inr</option>
              </select>
              
            </div>
            <div className='innerFlex'>
            <img src={MyIcon} alt="Icon" />
            </div>
            
            <div className='innerFlex'>
              <label htmlFor='to'>To</label>
              <select value={toOption} onChange={handleToSelectChange}>
                <option value="">Select an option</option>
                <option value="djf">djf</option>
              </select>
            </div>
          </div>
          <button type="submit">Convert</button>
        </form>
        <div className='footer'>
          <div className='header'>Converted Amount:</div>
          {trues ?
            (<div className='currency'>{`${amount}  inr  =  ${value}  djf`}</div>
            ) : (<div className='currency'>click on convert to see converted Value!!</div>)}
        </div>
      </div>
    </main>
  )
}

export default App;
