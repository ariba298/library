import React, { useState, Fragment } from 'react'
import InputForm from './components/AddBook'
import EditForm from './components/EditBook'
import TableBook from './components/TableBook'
import { Paper, makeStyles } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
	root: {
	  padding: '2px 4px',
	  display: 'flex',
	  alignItems: 'center',
	  width: 400,
	},
	input: {
	  marginLeft: theme.spacing(1),
	  flex: 1,
	  padding:'0 10px'
	},
	iconButton: {
	  padding: 10,
	},
  }));
  
function App() {

    const classes = useStyles();
    
  	const booksData = []
	const initialFormState = { id: null, name: '', author: '', status:'', student: '' }

	const [ books, setBooksData ] = useState(booksData)
	const [ searcBooks, setSearchBooks ] = useState(booksData)
	
	const [ currentBook, setCurrentBook ] = useState(initialFormState)
	const [ isEditing, setEditing ] = useState(false)
	const [ action, setAction ] = useState('')

	const add = book => {
		book.id = books.length + 1
		setBooksData([ ...books, book ])
		setSearchBooks([ ...books, book ])
		
	}

	const deleteU = id => {
		setEditing(false)

		setBooksData(books.filter(book => book.id !== id))
		setSearchBooks(books.filter(book => book.id !== id))
		

	}

	const update = (id, updatedBook) => {
		setEditing(false)

		setBooksData(books.map(book => (book.id === id ? updatedBook : book)))
		setSearchBooks(books.map(book => (book.id === id ? updatedBook : book)))
	
	}

	const editRow = (book, action) => {
		setEditing(true)
		setAction(action)	
		setCurrentBook({ id: book.id, name: book.name, author:book.author, status: book.status , student: book.student })
	}

	const search = (event) => {
        if(event.target.value=='')
        {
            setSearchBooks(books)
        }
        else 
        {
            let re = new RegExp(event.target.value+'.+$', 'i');
            let result = books.filter(function(e){
                return e.name.search(re) != -1;
            });
            setSearchBooks(result)
        }
	}
	
	return (
		<Paper style={{display:'flex', width:'90%', padding:'10px', margin:'0 auto',  flexDirection:'column', justifyContent:'center'}}>
	
			<h1>Simple Library System</h1>
			<div>
				<div>
					{isEditing ? (
						<Fragment>
							<h2>{action +" Book"}</h2>
							<EditForm
								editing={isEditing}
								setEditing={setEditing}
								currentBook={currentBook}
								updateBook={update}
								action={action}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Book</h2>
							<InputForm addBook={add} />
						</Fragment>
					)}
				</div>
				<div>
					<h2>Search</h2>
					<Paper style={{marginBottom:'5px'}}>
						<InputBase
							className={classes.input}
							placeholder="Search Book by name"
							inputProps={{ 'aria-label': 'Search Book by name' }}
							onChange={(event)=> search(event)}
						/>
					</Paper>
					<h2>View Books</h2>
					<TableBook books={searcBooks} editRow={editRow} deleteBook={deleteU} />
				</div>
			</div>
		</Paper>
  );
}

export default App;
