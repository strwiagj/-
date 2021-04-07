import React,{Component} from 'react'
import {connect} from 'react-redux'
import newQuote from './store/action'
import './css/quote.css'

class Quote extends Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return(
		<div className="container">
            <div className="quote-content">
			<p className="quote"><em>{this.props.quote}</em></p>
			<p className="author">---{this.props.author}</p>
			<button onClick={this.props.nextQuote} className="next-quote-btn">再来一句</button>
			</div>
		</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {quote:state.quote,author:state.author,index:state.index}
}

const mapDispatchToProps = (dispatch)=>{
	return {nextQuote:function(){dispatch(newQuote())}}
}

//建立和redux的连接
const message = connect(mapStateToProps,mapDispatchToProps)(Quote)

export default message
