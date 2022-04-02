import React from 'react';

import CalcButton, {CalcButton0} from '../components/CalcButton';

// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
		display: [],
    };
	  this.show = this.show.bind(this)
	  this.resetState = this.resetState.bind(this)
	  this.count = this.count.bind(this)
	  this.showNotImplemented = this.showNotImplemented.bind(this)
  }

  resetState() {
    this.setState({display: []})
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
	alert("這次作業不會用到這個功能啊，大哥/大姊，不要亂按好嗎？愛你。")
  }
	
  show(e){
	  let i = e.target.innerHTML;
	  let newdis = [...this.state.display, i]
	  
	  this.setState({display: newdis});
  }
	
  count(){
	  let dis = this.state.display
	  let l = dis.length - 1
	  let result = 0.0
	  let record = 0
	  let A = []
	  let B = []
	  let last = 0
	  
	  if(dis[0] === 'x' || dis[0] === '÷')  this.setState({display: ["error"]});
	  else if(dis[l] === '+' || dis[l] === '-' || dis[l] === 'x' || dis[l] === '÷')  this.setState({display: ["error"]});
	  else if(dis[0] === 'error')  this.setState({display: ["error"]});
	  
	  else{
	  
		  for(let i = 0; i < dis.length; i++){  //  */先處理
			  
			  if(dis.length === 1) break;
			  
			  if(dis[i] ==='x' || dis[i] ==='÷'){
				  
				  let k = i
				  while(true){
					  if(dis[k + 1] ==='x' || dis[k + 1] ==='÷'){
						  dis = ['error'];
						  break;
					  }
					  else if(dis[k + 1] ==='+'){
						  dis.splice(k + 1,1)
					  }
					  else if(dis[k + 1] ==='-'){
						  dis.splice(k + 1,1)
						  A.push('-')
					  }
					  else if(dis[k - 1] ==='+' || dis[k - 1] === '-'){
						  dis = ['error'];
						  break;
					  }
					  else  break;
				  }
				  
				  if(dis[0] === 'error')  break;
				  
				  for(let j = record; j < i; j++){
					  A.push(dis[j])
				  }
				  let Ares = parseFloat(A.join(''), 10)
				  
				  for(let j = i + 1; j < dis.length; j++){
					  if(dis[j] === '+' || dis[j] === '-' || dis[j] === 'x' || dis[j] === '÷')  break;
					  B.push(dis[j])
					  last = j
				  }
				  let Bres = parseFloat(B.join(''), 10)
				  if(dis[i] ==='x')    result = Ares * Bres;
				  else                 result = Math.round(Ares / Bres *100000) / 100000;
				  dis.splice(record, last - record + 1, String(result));
				  i = record;
				  A = [];
				  B = [];
			  }
			  
			  else if(dis[i] ==='+' || dis[i] ==='-'){
				  record = i + 1;
			  }
		  }
		  
		  
		  for(let i = 0; i < dis.length; i++){  // 後處理+-
			  if(dis[0] === 'error')  break;
			  else if(dis.length === 1) break;
			  
			  if(dis[i] === '+' || dis[i] === '-'){
				  
				  
				  while(true){
					  
					  if(dis[i] === '+' && dis[i + 1] === '+'){
						  dis.splice(i + 1,1)
				      }
					  else if(dis[i] === '+' && dis[i + 1] === '-'){
						  dis[i] = '-'
						  dis.splice(i + 1,1)
				      }
					  else if(dis[i] === '-' && dis[i + 1] === '+'){
						  dis.splice(i + 1,1)
				      }
					  else if(dis[i] === '-' && dis[i + 1] === '-'){
						  dis[i] = '+'
						  dis.splice(i + 1,1)
				      }
					  else if(i === 0 && (dis[1] !== '+' || dis[1] !== '-')){
						  if(dis[0] === '+'){
							  dis.splice(0,1);
							  break;
						  }  
						  else if(dis[0] === '-'){
							  dis[1] = '-' + dis[1];
							  dis.splice(0,1);
							  break;
						  }
					  }
					  
					  else  break;
				  }
				  
				  if(dis[0] === 'error')  break;
				  else if(i === 0)  continue;
				  
				  
				  for(let j = 0; j < i; j++){
					  A.push(dis[j])
				  }
				  let Ares = parseFloat(A.join(''))
				  
				  for(let j = i + 1; j < dis.length; j++){
					  if(dis[j] === '+' || dis[j] === '-')  break;
					  B.push(dis[j])
					  last = j
				  }
				  let Bres = parseFloat(B.join(''), 10)
				  if(dis[i] ==='+')  result = Ares + Bres;
				  else               result = Ares - Bres;
				  dis.splice(0, last + 1, String(result));
				  i = 0
				  A = [];
				  B = [];
			  }
		  }
		  
	  this.setState({display: dis});
	  
	  }
  }

  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display" id = 'display'>{this.state.display.join('')}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
            <CalcButton className="calc-operator" onClick = {this.show}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick = {this.show}>7</CalcButton>
            <CalcButton className="calc-number" onClick = {this.show}>8</CalcButton>
            <CalcButton className="calc-number" onClick = {this.show}>9</CalcButton>
            <CalcButton className="calc-operator" onClick = {this.show}>x</CalcButton>
          </div>
		  <div className="calc-row">
            <CalcButton className="calc-number" onClick = {this.show}>4</CalcButton>
            <CalcButton className="calc-number" onClick = {this.show}>5</CalcButton>
            <CalcButton className="calc-number" onClick = {this.show}>6</CalcButton>
            <CalcButton className="calc-operator" onClick = {this.show}>-</CalcButton>
          </div>
		  <div className="calc-row">
            <CalcButton className="calc-number" onClick = {this.show}>1</CalcButton>
            <CalcButton className="calc-number" onClick = {this.show}>2</CalcButton>
            <CalcButton className="calc-number" onClick = {this.show}>3</CalcButton>
            <CalcButton className="calc-operator" onClick = {this.show}>+</CalcButton>
          </div>
		  <div className="calc-row">
            <CalcButton0 className="calc-number" onClick = {this.show}>0</CalcButton0>
            
            <CalcButton className="calc-number" onClick = {this.showNotImplemented}>.</CalcButton>
            <CalcButton className="calc-operator" onClick = {this.count}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
