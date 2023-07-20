import axios from "./axios";
import { toastError, toastSuccess } from "../components/toast";

export const findEvents = async (setData) => {
  try {
    const response = await axios.get(`/Event/Get`);
    setData(response.data);
  } catch (error) {
    console.log(error);
    toastError("Error in fetching Events");
  }
};

export const findEvent = async (id, setData) => {
  try {
    const response = await axios.get(`/Event/Get/${id}`);
    setData(response.data);
  } catch (error) {
    console.log(error);
    toastError("Error in fetching Events");
  }
};

export const deleteEvent = async (id) => {
  try {
    await axios.delete(`/Event/Delete/${id}`);
    toastSuccess("Event Deleted Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error in deleting Event");
  }
};


export const createEvent = async (values) => {
  try {
    
    const formData = new URLSearchParams();
    formData.append("Name", values.name);
    formData.append("Description", values.desc);
    formData.append("Date", values.date);
    formData.append("Location", values.location);
    formData.append("CategoryId", values.category);
    formData.append("Organizer", values.organizer);
    formData.append("Price", values.price);
    formData.append("IsStatus", true);

    await axios.post(`/Event/Post?${formData}`);
    toastSuccess("Event Created Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error in fetching Events");
  }
};

export const saveEvent = async (id, values) => {
  try {
    
    const formData = new URLSearchParams();
    formData.append("Name", values.name);
    formData.append("Id", id);
    formData.append("Description", values.desc);
    formData.append("Date", values.date);
    formData.append("Location", values.location);
    formData.append("CategoryId", values.category);
    formData.append("Organizer", values.organizer);
    formData.append("Price", values.price);
    formData.append("IsStatus", true);

    await axios.put(`/Event/Update/${id}?${formData}`);
    toastSuccess("Event Update Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error in fetching Events");
  }
};
