import React, { useEffect,useState } from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) =>
  createStyles({
   root: {
    marginTop: 20,
   },
   field: {
       width: '31.8vw',
       marginLeft: '-1.2vw',
       // (Note: space or no space after & matters. See SASS "parent selector".)
       '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
           '& fieldset': {            // - The <fieldset> inside the Input-root
               borderColor: '#000',   // - Set the Input border
           },
           '&:hover fieldset': {
               borderColor: '#800080', // - Set the Input border when parent has :hover
           },
           '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
               borderColor: '#800080',
           },
       },
   }
  }),
);

function useMounted() {
    const [isMounted, setIsMounted] = useState(false)
  
  
    React.useEffect(() => {
      setIsMounted(true)
    }, [])
    return isMounted
  }

function Display({number,setInputText,inputText,output}) {
    const isMounted = useMounted()
    React.useEffect(() => {
        if (isMounted) {
          setInputText([number]); 
        }
    
      }, [])//prevent creation of a empty number element
      React.useEffect(() => {
        if (isMounted) {       
         setInputText([...inputText,number].join('')); 
        }
    
      }, [number])

  
    const classes = useStyles();
    return (
        <div>
            <Box textAlign="center">
     <form className={classes.root} >
      <TextField className={classes.field} value={inputText || output}   variant="outlined"  />
    </form>
            </Box>
        </div>
    )
}

export default Display

