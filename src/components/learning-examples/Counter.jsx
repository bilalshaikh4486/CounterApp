import React, { Component } from "react";
import './Counter.css'

class Counter extends Component{
  
  constructor(){
    super();//Error 1 
    this.state={
      Counter:0
    }
    this.increment =this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render(){
    return (
      <div className='Counter'>
      <CounterButton by ={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
      <CounterButton by ={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
      <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}/>
      <CounterButton by={50} incrementMethod={this.increment} decrementMethod={this.decrement}/>  
      <span className="CounterButton">{this.state.Counter}</span>
      <div>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
      </div>
    </div>
    );
    }  
    reset(){
      this.setState({Counter:0});
    }
    increment(by){ 
      //console.log( `incremnt from parent - ${by}`)
      //update state counter++
      //console.log('increment');
    //this.state.Counter++; Bad practice
    this.setState(
      (prevstate) => {
      return{Counter:this.state.Counter+ by}
    });
    }
    decrement(by){ 
      //console.log( `incremnt from parent - ${by}`)
      //update state counter++
      //console.log('increment');
    //this.state.Counter++; Bad practice
    this.setState(
      (prevstate) => {
      return{Counter:this.state.Counter- by}
    });
    }
}

class CounterButton extends Component{

  constructor(){
    super();//Error 1 
  //   this.state={
  //     Counter:0
  //   }
  //   this.increment=this.increment.bind(this);
  //   this.decrement=this.decrement.bind(this);
    }

  render(){
    //const style = {fontSize: "50px",padding : "15px 30px"};
    return(
      <div className='CounterButton'>
        <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
      </div>
    )
  }
  // increment(){ 
  //   //update state counter++
  //   //console.log('increment');
  // //this.state.Counter++; Bad practice
  // this.setState({
  //   Counter:this.state.Counter+ this.props.by
  // });
  // this.props.incrementMethod(this.props.by);
  // }
  
  // decrement(){ 
  // this.setState({
  //   Counter:this.state.Counter- this.props.by
  // });
  // this.props.decrementMethod(this.props.by);
  // }
}
export default Counter; 