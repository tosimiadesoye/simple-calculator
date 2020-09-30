import React from 'react';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ClearBtn } from './components/ClearInput'
import {Button} from './components/TextBtn'
import {Input} from './components/InputText'
import './App.css';


class Calculator extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
           input: "",
           secondNum: ""
        }
       
    }

     handleButtonClick = val => {
          this.setState({input: this.state.input + val})
        }

        clearInput = () => {
            this.setState({input: ""})
        }        
        
        
       
        add = (currentNumber, previousNumber) =>  {
            currentNumber = parseInt(this.state.input) 
            previousNumber = parseInt(this.state.input)
            
            if(currentNumber !== "" || previousNumber !=="")
            return  parseInt(previousNumber) + parseInt(currentNumber)
        
          }

        subtract = (currentNumber, previousNumber) =>  {
            currentNumber = this.state.input 
            previousNumber = this.state.input
            if(currentNumber !== "" || previousNumber !=="")
            return parseInt(previousNumber) - parseInt(currentNumber)  
        
          }

        divide = (currentNumber, previousNumber) =>  {
            currentNumber = this.state.input 
            previousNumber = this.state.input
            if(currentNumber !== "" || previousNumber !=="")
            return parseInt(previousNumber) / parseInt(currentNumber)  
        
          }

        multiply = (currentNumber, previousNumber) =>  {
            currentNumber = this.state.input 
            previousNumber = this.state.input
            if(currentNumber !== "" || previousNumber !=="")
            return parseInt(previousNumber) * parseInt(currentNumber)  
        
          }

          evaluate = (val) => {
           
              if(val){
                    this.setState({
                        input: this.add()
                });
            }
              if(val){
                    this.setState({
                        input: this.subtract()
                });
            }
              if(val){
                this.setState({
                    input: this.divide()
            })
           }
              if(val){
            this.setState({
                input: this.multiply()
        });
    }
          };
          
        
        
render() {
 console.log(this.state.input)
    return (
        
            <div  className='bg-secondary mx-auto'>
                <Container>
                    <div className='page-wrapper'>
                    <Input input = {this.state.input}/>
                         <div className='row'>
                            <Button  handleClick ={this.handleButtonClick} >1</Button>
                            <Button  handleClick ={this.handleButtonClick} >2</Button>
                            <Button  handleClick ={this.handleButtonClick} >3</Button>
                            <Button  handleClick ={this.handleButtonClick}  >+</Button>   
                         </div>

                        <div className='row'>
                            <Button  handleClick ={this.handleButtonClick} >4</Button>
                            <Button  handleClick ={this.handleButtonClick} >5</Button>
                            <Button  handleClick ={this.handleButtonClick} >6</Button>
                            <Button  handleClick ={this.handleButtonClick}  >-</Button>
                        </div>

                        <div className='row'>   
                            <Button  handleClick ={this.handleButtonClick} >7</Button>
                            <Button  handleClick ={this.handleButtonClick} >8</Button>
                            <Button  handleClick ={this.handleButtonClick} >9</Button>
                            <Button  handleClick ={this.handleButtonClick}>x</Button>
                        </div>

                        <div className='row'>  
                            <Button  handleClick ={this.handleButtonClick} >0</Button>
                            <Button handleClick ={this.handleButtonClick} >.</Button>
                            <Button handleClick ={this.evaluate}>=</Button>
                            <Button  handleClick ={this.handleButtonClick} >/</Button>
                        </div>

                        </div>   
                    <ClearBtn handleClear = {this.clearInput}>Clear</ClearBtn>
                </Container>
               
            </div>
        );
    };
};

export default Calculator;