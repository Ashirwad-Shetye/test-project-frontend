import axios from "axios";
import {
    POST_NEW_COURSE,
    GET_ALL_COURSE,
    GET_COURSE,
    SET_COURSE_DATA,
    DELETE_COURSE
} from "./constants";

export const newCourse = (params:any) => {
  return axios.post(POST_NEW_COURSE, params);
};

export const getAllCourse = () => {
  return axios.get(GET_ALL_COURSE);
};

export const getCourse = (params:any) => {
  return axios.get(GET_COURSE, params);
};

export const setCourseData = (params:any) => {
  return axios.put(SET_COURSE_DATA, params);
};

export const deleteCourse = (params:any) => {
  return axios.delete(DELETE_COURSE, params);
};