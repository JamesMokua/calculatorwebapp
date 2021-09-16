import React,{useEffect} from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      
    },
    button: {
    marginRight: '1vw',
    width: '10vw',
    backgroundColor: "#fda085",
    '&:hover': {
        backgroundColor:"#800080"
    }
    },
    buttonoperator: {
        marginRight: '1vw',
        width: '10vw',
        backgroundColor: "#800080",
        '&:hover': {
            backgroundColor:"#fda085"
        }
    },
   
  }),
);

function Keypad({setNumber,setOutput,setInputText,inputText,calculate}) {
    const classes = useStyles();
    
    const registerInput =  (number) => {
      setNumber(number)
    }
    useEffect(() => {
     registerInput()
    }, [registerInput])
    const clear = () => {
    setInputText('');
    setOutput('')
    }
    const clearOne = () => {
      setInputText(inputText.slice(0, inputText.length - 1))
      }
  
    
    
    return (
        <div className={classes.root}>
<Box textAlign="center">
  <Button  onClick={() => clear()} className={classes.button} variant="contained" size="large" >Clear</Button>
  <Button  onClick={() => clearOne()}  className={classes.button}  variant="contained" size="large">C</Button>
  <Button  onClick={() => registerInput('.')}  className={classes.button}  variant="contained" size="large">.</Button>
</Box>
 <Box textAlign="center">
  <Button onClick={() => registerInput('1')}  className={classes.button} variant="contained" size="large" >1</Button>
  <Button  onClick={() => registerInput('2')}  className={classes.button} variant="contained" size="large" >2</Button>
  <Button  onClick={() => registerInput('3')}  className={classes.button}  variant="contained" size="large">3</Button>
</Box>
<Box textAlign="center">
  <Button  onClick={() => registerInput('4')} className={classes.button}  variant="contained" size="large" >4</Button>
  <Button  onClick={() => registerInput('5')}  className={classes.button}  variant="contained" size="large" >5</Button>
  <Button  onClick={() => registerInput('6')}  className={classes.button} variant="contained" size="large" >6</Button>
</Box>
<Box textAlign="center">
  <Button  onClick={() => registerInput('7')}  className={classes.button}  variant="contained" size="large" >7</Button>
  <Button   onClick={() => registerInput('8')}  className={classes.button} variant="contained" size="large" >8</Button>
  <Button   onClick={() => registerInput('9')}  className={classes.button} variant="contained" size="large" >9</Button>
</Box>
<Box textAlign="center">
<Button  onClick={() => registerInput('(')} className={classes.button} variant="contained" size="large" >(</Button>
<Button  onClick={() => registerInput(')')} className={classes.button} variant="contained" size="large" >)</Button>
  <Button  onClick={() => registerInput('0')} className={classes.button} variant="contained" size="large" >0</Button>
</Box>
<Box  textAlign="center">
  <Button onClick={() => registerInput('+')}  className={classes.buttonoperator} variant="contained" size="large" ><strong>+</strong></Button>
  <Button onClick={() => registerInput('-')} className={classes.buttonoperator} variant="contained" size="large" ><strong>-</strong></Button>
  <Button onClick={() => registerInput('/')} className={classes.buttonoperator} variant="contained" size="large" ><strong>/</strong></Button>
  <Button onClick={() => registerInput('*')} className={classes.buttonoperator} variant="contained" size="large" ><strong>*</strong></Button>
</Box>
<Box textAlign="center">
  <Button onClick={() => calculate()} className={classes.button} variant="contained" size="large" >=</Button>
</Box>

        </div>

    )
}

export default Keypad
