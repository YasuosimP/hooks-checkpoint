import React, { useState } from "react";
import { Modal, Button ,Form ,Col,Row   } from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';
const Add = ({ show, handleClose , addMovie}) => {
    const [newMovie, setNewMovie] = useState({
        title :"",
        rate: 1 ,
        duration:"",
        genre:"",
        description:"",
        img :"",
        year :""

    })
    const onStarClick=(nextValue, prevValue, name)=> {
        //setRate(nextValue);
      }
      const handleChange=(e)=>{
          setNewMovie({...newMovie,[e.target.name]:e.target.value})
      }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" placeholder="Movie Title" onChange={handleChange}name="title"/>
    </Form.Group>
   
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>cover url</Form.Label>
      <Form.Control type="text" placeholder="cover" onChange={handleChange} name="img"/>
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Movie Description</Form.Label>
    <Form.Control as="textarea" rows={3} onChange={handleChange}name="description"/>
  </Form.Group>

  <StarRatingComponent 
          name="rate1" 
          starCount={5}
          //value={newRate}
          
        />
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Genre</Form.Label>
      <Form.Select defaultValue="Choose Genre " onChange={handleChange} name="genre">
        <option>Choose...</option>
        <option>Action</option>
        <option>Drama</option>
        <option>Thrill</option>
        <option>Animation</option>
        <option>Fantasy</option>
        <option>Romance</option>
      </Form.Select>
    </Form.Group>
    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Duration  </Form.Label>
      <Form.Control onChange={handleChange} name="duration"/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Release Year</Form.Label>
      <Form.Control  onChange={handleChange}name="year"/>
    </Form.Group>
  </Row>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{addMovie(newMovie);handleClose()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
