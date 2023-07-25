import axios from "./axios";
import { toastError, toastSuccess } from "../components/toast";

export const findUsers = async (setData) => {
  try {
    const response = await axios.get(`/Users/Get`);
    setData(response.data);
  } catch (error) {
    console.log(error);
    toastError("Error in fetching Users");
  }
};

export const findUser = async (id, setData) => {
  try {
    const response = await axios.get(`/Users/Get/${id}`);
    setData(response.data);
  } catch (error) {
    console.log(error);
    toastError("Error in fetching Users");
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`/Users/Delete/${id}`);
    toastSuccess("User Deleted Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error in deleting User");
  }
};

export const createUser = async (values) => {
  try {
    const formData = new URLSearchParams();
    formData.append("Name", values.name);
    formData.append("Email", values.email);
    formData.append("Password", values.password);
    formData.append("Address", values.address);
    formData.append("PhoneNumber", values.phoneNumber);

    await axios.post(`/Users/Post?${formData}`);
    toastSuccess("User Created Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error in fetching Users");
  }
};

export const saveUser = async (id, values) => {
  try {
    const formData = new URLSearchParams();
    formData.append("Name", values.name);
    formData.append("Email", values.email);
    formData.append("Password", values.password);
    formData.append("Address", values.address);
    formData.append("PhoneNumber", values.phoneNumber);

    await axios.put(`/Users/Update/${id}?${formData}`);
    toastSuccess("User Updated Successfully");
  } catch (error) {
    console.log(error);
    toastError("Error in fetching Users hohohoho");
  }
};
