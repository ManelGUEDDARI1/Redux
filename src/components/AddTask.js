import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';
import {InputGroup,FormControl} from 'react-bootstrap'

function AddTask () {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div>
              <InputGroup className="mb-3">
    <FormControl
    value={name}
    onChange={(e)=>setName(e.target.value)}
    type="text" 
      placeholder="Task"
      aria-label="Task"
    />
                  <button
                variant="outline-secondary" id="button-addon2"
                onClick={()=>{
                       dispatch(  addTodo({
                        id: uuid(),
                        name: name,
                    }));
                        setName('');
                    }}
                   >Add</button>
                     </InputGroup>
             

                  
            </div>
    )
}

export default AddTask