import React from 'react'
import {Form, FormControl, Button, Navbar} from 'react-bootstrap'
import { useState } from 'react'

 const Search = () => {
    const [searchBarInput, setSearch] = useState("");

    const UseSearchBar = (searchBarInput) => {
        
        console.log(searchBarInput);
    }

    const ClearSearch = (searchBarInput) => {
        searchBarInput = "";
        console.log(searchBarInput) 
    }
     

    return (
        <div className='d-flex justify-content-center'>
            <Navbar bg="secondary" variant="dark">
             <Form inline>
      <FormControl type="text" placeholder="Search Users" 
      className="mr-sm-2"
      
       onChange = {e => setSearch(e.target.value)} />
      <Button variant="primary" onClick={e => UseSearchBar(searchBarInput)} >Search</Button>
      <Button variant='secondary' onClick={e => ClearSearch(searchBarInput)}>Clear</Button>  

    </Form>
    </Navbar>
        </div>
    )
}

export default Search;
