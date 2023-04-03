import axios from "axios";
import {
    POST_NEW_LECTURE,
    GET_ALL_LECTURE,
    GET_LECTURE,
    SET_LECTURE_DATA,
    DELETE_LECTURE
} from "./constants";

export const newCourse = (params:any) => {
  return axios.post(POST_NEW_LECTURE, params);
};

export const getAllCourse = (params:any) => {
  return axios.post(GET_ALL_LECTURE, params);
};

export const getCourse = (params:any) => {
  return axios.get(GET_LECTURE, params);
};

export const setCourseData = (params:any) => {
  return axios.post(SET_LECTURE_DATA, params);
};

export const deleteCourse = (params:any) => {
  return axios.post(DELETE_LECTURE, params);
};