import React from 'react'
import {Form, FormControl, Button, Navbar} from 'react-bootstrap'
import { useState } from 'react'
import PropTypes from 'prop-types'

 const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {
    const [search, setSearch] = useState("");

    const UseSearchBar = (search) => {
        if(search === ''){
            setAlert('Please enter something in the searchbar', 'danger')
        }else{
            searchUsers(search);
            setSearch('')
            
        }
    }

    const ClearSearch = (search) => {
        setSearch("");
        console.log(search) 
        clearUsers();
    }
     

    return (
        <div className='d-flex justify-content-center'>
            <Navbar bg="secondary" variant="dark">
             <Form inline>
      <FormControl type="text" placeholder="Search Users" 
      className="mr-sm-2"
      
       onChange = {e => setSearch(e.target.value)} />
      <Button variant="primary" onClick={e => UseSearchBar(search)} >Search</Button>
       

    </Form>
    {showClear && <Button variant='secondary' onClick={e => ClearSearch(search)}>Clear</Button> }
    
    </Navbar>
        </div>
    )
}

 

export default Search;
