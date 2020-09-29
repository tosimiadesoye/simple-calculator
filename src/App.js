import React from 'react';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ClearBtn } from './components/ClearInput'
//import {DecimalBtn} from './components/Decimal'
import './App.css'

class Calculator extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
           input: "0"
        }
      
    }
        inputValue = event => {
            this.setState({input: event.target.value})    
        }

        handleButtonClick = (event) => {
            return this.setState({input: event.target.name})    
        }

        
        clearInput = () => {
            this.setState({input: ""})
        }
        
        addDecimal = (val) => {
            //only add decimal if there's no existing decimal
            if(this.state.input.indexOf(".") === -1){
                return this.setState({input: val.target.name})
            }
        }

        evaluate = () => {
          this.setState((currentNumber, previousNumber) => {
              currentNumber = this.state.input
              previousNumber = this.state.input
          })
            
        }

        
        
render() {

    return (
        
            <div  className='bg-secondary mx-auto'>
                <Container>
                    <div className='page-wrapper'>
                    <input value = {this.state.input} onChange = {this.inputValue} className='input'/>
                         <div className='row'>
                            <button  onClick ={this.handleButtonClick} name="1" className='button'>1</button>
                            <button  onClick ={this.handleButtonClick} name="2" className='button'>2</button>
                            <button  onClick ={this.handleButtonClick} name="3" className='button'>3</button>
                            <button  onClick ={this.handleButtonClick} name="+" id='operators' className='button'>+</button>   
                         </div>

                        <div className='row'>
                            <button  onClick ={this.handleButtonClick} name="4" className='button'>4</button>
                            <button  onClick ={this.handleButtonClick} name="5" className='button'>5</button>
                            <button  onClick ={this.handleButtonClick} name="6" className='button'>6</button>
                            <button  onClick ={this.handleButtonClick} name="-" id='operators' className='button'>-</button>
                        </div>

                        <div className='row'>   
                            <button  onClick ={this.handleButtonClick} name="7" className='button'>7</button>
                            <button  onClick ={this.handleButtonClick} name="8" className='button'>8</button>
                            <button  onClick ={this.handleButtonClick} name="9" className='button'>9</button>
                            <button  onClick ={this.handleButtonClick} name="*" id='operators' className='button'>x</button>
                        </div>

                        <div className='row'>  
                            <button  onClick ={this.handleButtonClick} name="0" className='button'>0</button>
                            <button  onClick ={this.addDecimal} name="." className='button'>.</button>
                            <button  onClick ={this.evaluate} name="=" className='button'>=</button>
                            <button  onClick ={this.handleButtonClick} name="/" id='operators' className='button'>/</button>
                        </div>

                        </div>   
                    <ClearBtn handleClear = {this.clearInput}>Clear</ClearBtn>
                </Container>
               
            </div>
        );
    };
};

//ReactDOM.render(<Calculator/>, document.getElementById('root'));
export default Calculator;