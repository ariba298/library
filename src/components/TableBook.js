import React from 'react'
import { Button, Paper } from '@material-ui/core'

const TableBook = props => (

 <Paper style={{display:'flex', width:'80%', padding:'10px', margin:'0 auto',  flexDirection:'row', justifyContent:'space-around'}}>		
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Author</th>
        <th>Status</th>
        <th>Student</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.books.length > 0 ? (
        props.books.map(book => (
          <tr key={book.id}>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.status}</td>
            <td>{book.student}</td>
            
            <td>
              {
                 book.status == 'Available'?       
                <Button variant="contained" 
                  style={{marginLeft:'5px'}} 
                  color="primary" 
                  onClick={() => {
                    props.editRow(book, 'issue')
                  }}
                >
                  Issue
                </Button>
                : ''
              }
              {
                book.status != 'Available' ? 
              
                <Button variant="contained" 
                  style={{marginLeft:'5px'}} 
                  color="primary" 
                  onClick={() => {
                    props.editRow(book, 'return')
                  }}
                >
                  Return
                </Button>
                : ''  
              }
              {
                 book.status == 'Available' ? 
                <Button variant="contained" 
                  style={{marginLeft:'5px'}} 
                  color="primary" 
                  onClick={() => {
                    props.editRow(book, 'reserve')
                  }}
                >
                  Reserve
                </Button>
                :''
              }
              {
                 book.status == 'Available' ? 
                <Button variant="contained" 
                  style={{marginLeft:'5px'}} 
                  color="primary" 
                  onClick={() => props.deleteBook(book.id)}
                  className="button muted-button"
                  
                >
                  Delete
                </Button>
                : ''
              }
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td>No books</td>
        </tr>
      )}
    </tbody>
  </table>
</Paper>
)

export default TableBook