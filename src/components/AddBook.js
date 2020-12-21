import React, { useState } from 'react'
import { Button, Paper, TextField } from '@material-ui/core'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const InputForm = props => {
	const initialFormState = { id: null, name: '', author: '', status:'', student: '' }
	const [ book, setBook ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setBook({ ...book, [name]: value })
	}

	return (
		<Paper style={{display:'flex', width:'80%', height:"80px", padding:'10px', margin:'0 auto',  flexDirection:'row', justifyContent:'space-around'}}>
			<label>Name:</label>
			<TextField type="text" name="name" value={book.name} onChange={handleInputChange} />
			<label>Author:</label>
			<TextField type="text" name="author" value={book.author} onChange={handleInputChange} />
			
			<Button variant="contained" style={{marginLeft:'5px', width:'150px', height:'50px'}} color="primary" 
				
				onClick={event => {
					if (!book.name || !book.author) return
					book.status = 'Available'
					props.addBook(book)
					setBook(initialFormState)
				}}
			>
				Add Book
			</Button>
			
		</Paper>
	)
}

export default InputForm