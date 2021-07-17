import React, { useState } from 'react'
import { Modal, Button }  from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieAdd({add}) {
    const [newMovie,setNewMovie]=useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange =(event) =>{
        let  {name,value}=event.target;
        setNewMovie(el=>({...el,[name]:value}))
    }

    return (
    <>
        <Button variant="primary" onClick={handleShow}>
        Add a Movie
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Title :</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display:'flex', flexDirection:'column'}} >
          Title  : <input name='Title' onChange={handleChange} />
          Year   : <input name='Year' onChange={handleChange} />
          Poster : <input name='Poster' onChange={handleChange} />
          Rate   : <input name='Rate' onChange={handleChange}/>
          </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
            <Button variant="primary" onClick={()=>{add(newMovie);handleClose()}}>
            Save Changes
            </Button>
        </Modal.Footer>
        </Modal>
    </>
    );
  }


export default MovieAdd
