import React from 'react'
import inputText from './Display';
import setInputText from './Display';
import number from './Display';


function logic() {
    const operator = () => {
        switch (inputText) {
                case '+':
                    alert('hello')
                    break;
            
                default:
                    setInputText([...inputText,number].join('')); 
                    break;
            }
            
    }
    return (
        <div>
            
        </div>
    )
}

export default logic
