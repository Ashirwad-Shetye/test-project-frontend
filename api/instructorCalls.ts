import axios from "axios";
import {
    POST_NEW_INSTRUCTOR,
    GET_ALL_INSTRUCTOR,
    GET_INSTRUCTOR,
    SET_INSTRUCTOR_DATA,
    DELETE_INSTRUCTOR
} from "./constants";

export const newInstructor = (params:any) => {
  return axios.post(POST_NEW_INSTRUCTOR, params);
};

export const getAllInstructor = () => {
  return axios.get(GET_ALL_INSTRUCTOR);
};

export const getInstructor = (params:any) => {
  return axios.get(GET_INSTRUCTOR, params);
};

export const setInstructorData = (params:any) => {
  return axios.put(SET_INSTRUCTOR_DATA, params);
};

export const deleteInstructor = (params:any) => {
  return axios.delete(DELETE_INSTRUCTOR, params);
};