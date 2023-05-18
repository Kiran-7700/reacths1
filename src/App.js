
import React from 'react';
import './App.css';
import Classcomp from './components/classcomp';
import Funcomp from './components/funcomp';






class App extends React.Component{
  constructor(){
    super();
    this.state={
      functionClick:false,
      classClick:false
    }
  }

  render(){
    return(
    
    <div className='container'>
       <div>
        <h1 className='App'>Styling using Functional and Class Components</h1>
       </div>


       <div className='styling'>
       <button onClick={()=>this.setState({functionClick: !this.state.functionClick})}>
        <span>To see styling in functional component</span></button>

       <button onClick={()=>this.setState({classClick: !this.state.classClick})}>
       To see styling in class component</button> 
         
       </div>

       <div className="space_around">
        <div>
        {this.state.functionClick && <Funcomp/>}
        </div>
        <div>
        {this.state.classClick && <Classcomp/>}
        </div>
         
       </div>
    </div>
    )
  }
  
}

export default App;
