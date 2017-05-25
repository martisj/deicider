import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Die(props) {
  return (
    <div className={'dice ' + props.className}></div>
  );
}

function Decision(props) {
  return (
    <input className="decision" onClick={()=>{console.log('hello')}} />
  );
}

function Roller() {
  return (
    <button className="roll-it" onClick={() => { console.log('Roll the dice') }}>Roll</button>
  );
}

class Decidr extends React.Component {
  constructor () {
    super();

    this.state = {
      diceCount: 6,
    }
  }

  render () {
    const dice = Array(this.state.diceCount)
        .fill(null)
        .map((dice, index) => {
          let label = 'eyes-' + (index + 1);
          return <Die value={index} key={label} className={label} />
        });
    return (
      <div className="Decidr">
        <Decision />
        <Roller />
        {dice}
      </div>
    );
  }
}

ReactDOM.render(
  <Decidr />,
  document.getElementById('root')
);
