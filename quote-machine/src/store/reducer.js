import quotes from './quotes'
import {NEWQUOTE} from './types'

const defaultState = {
	quote:"知己知彼，百战不殆",
	author:"孙子",
	index:0
}

const rootReducer = (state=defaultState,action)=>{
	switch(action.type){
		case NEWQUOTE:{
			let len = quotes.length;
			let index = Math.round(Math.random(0,len)*(len-1));
			if(index == state.index){
				let newIndex = (index + 1)%len;
				return quotes[newIndex];
			}
			else
				return quotes[index];
		}
		default:
			return state;
	}
}

export default rootReducer
