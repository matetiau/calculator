import React, { Component } from 'react';
import './App.css';






let scripta = document.createElement('script');
scripta.setAttribute('src', "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js")
document.head.appendChild(scripta);



class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
     sum:'',saint:''
    };
   this.addInput = this.addInput.bind(this);
   this.sumApp = this.sumApp.bind(this);
   this.clear = this.clear.bind(this);

  }
  addInput(){
      document.getElementById('app').onclick = buttonOn => {
        /* display input */



        if (buttonOn.target.type === "submit" && buttonOn.target.innerText!== "=" ){
          document.getElementById('display').value = document.getElementById('display').value +buttonOn.target.innerText;
        }
        if (buttonOn.target.type === "=" ){
          this.setState({saint:buttonOn.target.type});
        }
          
        
  }
 }
 sumApp(){
  if (document.getElementById('display').value.split("")[1] === "0"){
    document.getElementById('display').setAttribute( 'pattern',"^[01-9]" );
    console.log('error');
  } else {
  document.getElementById('display').value = eval(document.getElementById('display').value);
  this.setState({sum:eval(document.getElementById('display').value)});}
  

 
 }



clear() {
  
  
  this.setState({sum:0});
  document.getElementById('display').value = 0;
  
}



  render() {
    return (
      <div className="App" style={{fontSize: '50px'}} id="app" onClick={this.addInput}>
      <form>
        <input id="display" step="0.0001" pattern="^[01-9]"  ></input><button id="equals" type="submit" onClick={this.sumApp} >=</button></form>
        
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
        <button id="equals" type="submit" onClick={this.sumApp} >=</button>
     
        </div>
      
        
        
        
       
      </div>
    );
  }
}

export default App;
