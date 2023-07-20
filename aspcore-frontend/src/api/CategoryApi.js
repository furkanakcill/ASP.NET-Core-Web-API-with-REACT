import axios from "./axios";
import { toastError, toastSuccess } from "../components/toast";

export const findCategories = async (setData) => {
  try {
    const response = await axios.get(`/Categories/Get`);
    setData(response.data);
  } catch (error) {
    console.log(error);
    toastError("Error in fetching Categories");
  }
};

export const findCategory = async (id, setData) => {
  try {
    const response = await axios.get(`/Categories/Get/${id}`);
    setData(response.data);
  } catch (error) {
    console.log(error);
    toastError("Error in fetching Categories");
  }
}

export const deleteCategory = async (id) => {
  try {
    await axios.delete(`/Categories/Delete/${id}`);
    toastSuccess("Category Deleted Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error in deleting Event");
  }
}

export const createCategory = async (values) => {
  try {
    
    const formData = new URLSearchParams();
    formData.append("Name", values.name);
    formData.append("Description", values.desc);
    formData.append("IsStatus", true);

    await axios.post(`/Categories/Post?${formData}`);
    toastSuccess("Category Created Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error in fetching Categories");
  }
}

export const saveCategory = async (id, values) => {
  try {
    
    const formData = new URLSearchParams();
    formData.append("Name", values.name);
    formData.append("Description", values.desc);

    await axios.put(`/Categories/Update/${id}?${formData}`);
    toastSuccess("Category Updated Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error in fetching Categories");
  }
}


