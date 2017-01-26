/* eslint-disable */

import React from 'react';
import Session from './Session.jsx';
import Api from '../scripts/api';



class MainPage extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    Api.getAllSessions().then((sessions) => {
      this.setState({ sessions });
    })
  }

  renderSessions() {
    if (!this.state.sessions) return null;
    return (<div className='innerContainer'>
    	{this.state.sessions.map((s)=>{
    		return <Session 
    			key={s.session_id}
    			nick={s.nick}
    			session_id={s.session_id}
    			name={s.name}
    			url={s.url}
    		/>
    	})}
    	</div>)
  }
  
  render() {
    return <div className='container'>
    	{this.renderSessions()}
    </div>
  }
}


MainPage.displayName = 'MainPage';

export default MainPage;
