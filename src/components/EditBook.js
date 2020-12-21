import { Button, Paper, TextField } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';



const EditForm = props => {
  const [ book, setBook ] = useState(props.currentBook)

  useEffect(
    () => {
      setBook(props.currentBook)
    },
    [ props ]
  )

  const handleInputChange = event => {
    const { name, value } = event.target

    setBook({ ...book, [name]: value })
  }

  return (
    <Paper style={{display:'flex', width:'80%', height:"80px", padding:'10px', margin:'0 auto',  flexDirection:'row', justifyContent:'space-around'}}>
	
      <label>Name</label>
      <TextField type="text" name="name" value={book.name} onChange={handleInputChange} />
      <label>Author</label>
      <TextField type="text" name="author" value={book.author} onChange={handleInputChange} />
      {
        props.action != 'return' ?
        <><label>Student</label>
        <TextField type="text" name="student" value={book.student} onChange={handleInputChange} />
        </> : ''
      }
      <Button variant="contained" style={{marginLeft:'5px', height:'50px'}} color="primary" 
        onClick={() => {
          props.setEditing(false)
          if(props.action=='return')
            {
              book.status ='Available'
              book.student = ''
            }
          if(props.action=='issue')
            book.status ='Issued'
          if(props.action=='reserve')
            book.status ='Reserve'
          
          props.updateBook(book.id, book)
          console.log("update",book)
        }}
      >
        {props.action}
      </Button>
      <Button variant="contained"  style={{marginLeft:'5px',height:'50px'}} color="primary"
        onClick={() => {
          props.setEditing(false)
        }}
      >
        Cancel
      </Button>

    </Paper>
  )
}

export default EditForm