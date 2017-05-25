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
          return <Die value={index} className={'eyes-' + (index + 1)} />
        });
    return (
      <div className="Decidr">
        <Decision />
        {dice}
      </div>
    );
  }
}

ReactDOM.render(
  <Decidr />,
  document.getElementById('root')
);
