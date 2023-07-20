import axios from "../api/axios";
import { useEffect, useState } from "react";

function Event() {

const [id, setId] = useState("");
const [eventName, setName] = useState("");
const [category, setCategory] = useState("");
const [events, setEvents] = useState([]);
 
  useEffect(() => {
    (async () => await Load())();
  }, []);
 
  async function Load() {
    
    const result = await axios.get("/Event/Get");
    setEvents(result.data);
    console.log(result.data);
  }
 
  async function save(event) {
   
    event.preventDefault();
    try {
      await axios.post("/Event/Post", {
        
      eventName: eventName,
      category: category,
       
      });
      alert("Event Registation Successfully");
          setId("");
          setName("");
          setCategory("");
       
     
      Load();
    } catch (err) {
      alert(err);
    }
  }
  async function editEvent(events) {
    setName(events.eventName);
    setCategory(events.category);
   
 
    setId(events.id);
  }
 
  async function DeleteEvent(id) {
  await axios.delete("/Event/Delete/" + id);
   alert("Event deleted Successfully");
   setId("");
   setName("");
   setCategory("");
   Load();
  }
 
  async function update(event) {
    event.preventDefault();
    try {
  await axios.patch("/Event/Update/"+ events.find((u) => u.id === id).id || id,
        {
        id: id,
        eventName: eventName,
        category: category,
        }
      );
      alert("Registation Updated Successfully");
      setId("");
      setName("");
      setCategory("");
     
      Load();
    } catch (err) {
      alert(err);
    }
  }
    return (
      <div>
        <h1>Event Details</h1>
      <div class="container mt-4">
        <form>
          <div class="form-group">
           
            <input
              type="text"
              class="form-control"
              id="id"
              hidden
              value={id}
              onChange={(event) => {
                setId(event.target.value);
              }}
            />
            <label>Event Name</label>
            <input
              type="text"
              class="form-control"
              id="stname"
              value={eventName}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div class="form-group">
            <label>Category</label>
            <input
              type="text"
              class="form-control"
              id="course"
              value={category}
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            />
          </div>
          <div>
            <button class="btn btn-primary mt-4" onClick={save}>
              Register
            </button>
            <button class="btn btn-warning mt-4" onClick={update}>
              Update
            </button>
          </div>
        </form>
      </div>
      <br></br>
      <table class="table table-dark" align="center">
        <thead>
          <tr>
            <th scope="col">Event Id</th>
            <th scope="col">Event Name</th>
            <th scope="col">Category</th>
         
 
            <th scope="col">Option</th>
          </tr>
        </thead>
        {events.map(function fn(event) {
          return (
            <tbody>
              <tr>
                <th scope="row">{event.id} </th>
                <td>{event.stname}</td>
                <td>{event.course}</td>
                
                <td>
                  <button
                    type="button"
                    class="btn btn-warning"
                    onClick={() => editEvent(event)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => DeleteEvent(event.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
        
      </div>
    );
  }
  
  export default Event;