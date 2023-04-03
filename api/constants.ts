export const DEFAULT_URL = "http://localhost:5000/";

// course routes

export const POST_NEW_COURSE = "/api/course";

export const GET_ALL_COURSE = "/api/course";

export const GET_COURSE = "/api/course/:id";

export const SET_COURSE_DATA = "/api/course/:id";

export const DELETE_COURSE = "/api/course/:id";

// instructor routes

export const POST_NEW_INSTRUCTOR = "/api/instructor";

export const GET_ALL_INSTRUCTOR = "/api/instructor";

export const GET_INSTRUCTOR = "/api/instructor/:id";

export const SET_INSTRUCTOR_DATA = "/api/instructor/:id";

export const DELETE_INSTRUCTOR = "/api/instructor/:id";

// lecture routes

export const POST_NEW_LECTURE = "/api/lecture/courses/:courseId";

export const GET_ALL_LECTURE = "/api/lecture/courses/:courseId";

export const GET_LECTURE = "/api/lecture/:id";

export const SET_LECTURE_DATA = "/api/lecture/:id";

export const DELETE_LECTURE = "/api/lecture/:id";