/* eslint-disable */

import React from 'react';
import Api from '../scripts/api';

class Session extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props);
  }

  changeValue(key) {
    const newValue = document.getElementsByClassName(`${key}Input`)[0].value;
    if (newValue !== this.props[key]) {
      console.log(`${key} was updated`);
      Api.update(this.props.session_id, key, newValue).then(() => {
        window.location.reload();
      })
    }
  }

  render() {
    return <div className='sessionCont'>
      <ul>
        {Object.keys(this.props).map((k)=>{
            return (<li key={k}>
                {k} :: 
                <input type='text' className={k+'Input'} readOnly={k !== 'nick'} defaultValue={this.props[k]} />
                {k === 'nick' ?
                 <input
                 type='submit'
                 onClick={()=>{
                  this.changeValue(k)}
                }
                className={this.props[k]+'Submit'}
                /> : null }
            </li>)
        })}
      </ul>
    </div>;
  }
}

Session.displayName = 'Session';

export default Session;
