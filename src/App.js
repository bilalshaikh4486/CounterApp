import './App.css';
import React,{ Component } from 'react';
import Counter from './components/learning-examples/Counter';

class App extends Component {
  render(){
  return (
    <div className='App'>
      <Counter/>
    </div>
  );
  }  
}
/*
class LearningComponents extends Component{
  render(){
    return(
      <div className='LearningComponents'>
      Welcome to Blog 
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <FourthComponent></FourthComponent>
    </div>
    )
  }
}

//fourth function component
function FourthComponent(){
  return (
    <div className='FourthComponent'>
      fourth component
    </div>
  );    
}
*/
export default App;