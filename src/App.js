import React, { Component } from 'react';
import './App.css';






let scripta = document.createElement('script');
scripta.setAttribute('src', "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js")
document.head.appendChild(scripta);



class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
     kapko: 0,sum:0,saint:""
    };
   this.addInput = this.addInput.bind(this);
   this.sumApp = this.sumApp.bind(this);
   this.clear = this.clear.bind(this);
   this.addAns = this.addAns.bind(this);
  }
  addInput(){
      document.getElementById('app').onclick = buttonOn => {
        /* display input */



        if (buttonOn.target.type === "submit" && buttonOn.target.innerText!== "=" ){
          document.getElementById('display').value = document.getElementById('display').value +buttonOn.target.innerText;
          }



        /* for operators */

        if (isNaN(buttonOn.target.innerText) && buttonOn.target.innerText !== "=" ){
          this.setState({saint:buttonOn.target.innerText});
        }

        /* for spec numbers */

        if (!isNaN(buttonOn.target.innerText) && this.state.saint === "+" && this.state.saint !== "=" ){
          this.setState({kapko:parseFloat(buttonOn.target.innerText)});
          this.setState({sum: this.state.sum  + this.state.kapko});
          console.log(this.state.sum);
        }

        /* for + */

    



       

       
        
        
          
        
          
        
  }
 }
 sumApp(){
  document.getElementById('display').value = eval(document.getElementById('display').value);
  
 

 
 }



clear() {
  document.getElementById('display').setAttribute('placeholder', 0);
  document.getElementById('display').value = "";
  this.setState({kapko:""});
  this.setState({sum:0});
  
}
addAns() {
  
  
  document.getElementById('display').value = this.state.sum;
}


  render() {
    return (
      <div className="App" style={{fontSize: '50px'}} id="app" onClick={this.addInput}>
        <input id="display" input="number" step="0.0001"  ></input>
        
        <div className="numbers" >
        <button id="seven"  >7</button>
        <button id="eight"  >8</button>
        <button id="nine"  >9</button>
        <button id="four" >4</button>
        <button id="five">5</button>
        <button id="six" >6</button>
        <button id="one"  >1</button>
        <button id="two" >2</button>
        <button id="three" >3</button>
        <button id="clear" onClick={this.clear} >C</button>
        <button id="zero" >0</button>
        <button id="decimal">.</button>
        
        </div>
        <div className="signs" >
        <button id="add">+</button>
        <button id="subtract">-</button>
        <button id="multiply" >*</button>
        <button id="divide">/</button>
        <button id="equals" onClick={this.sumApp} >=</button>
        <button id="ans" style={{fontSize: '30px'}} onClick={this.addAns}>ANS</button>
        </div>
        <h5 className="last-result">Last result = {this.state.sum}</h5>
        
        
        
       
      </div>
    );
  }
}

export default App;
