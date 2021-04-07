import React from 'react';
import ReactDOM from 'react-dom';
import Quote from './App';
import {Provider} from 'react-redux'
import store from './store'

class Wrapper extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(<Provider store={store}><Quote/></Provider>)
	}
}

ReactDOM.render(
  <React.StrictMode>
     <Wrapper/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
