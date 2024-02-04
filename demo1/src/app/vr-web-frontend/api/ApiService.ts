import axios from "axios";

const apiClient = axios.create
(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const signUpApi = (body) =>
{
    return apiClient.post(`/api/v1/users`,body);
};

export const login = (credentials) =>
{
  return apiClient.post("/api/v1/auth",credentials);
};

export const getUserCountApi = () =>
{
  return apiClient.get("/api/v1/user-count");
};

export const getUsersWithEmailAndUsernameApi = () =>
{
    return apiClient.get("/api/v1/all-usernames-emails");
};

export const postScoreApi = (credentials) =>
{
    return apiClient.post("/api/v1/add-score",credentials);
};

export const getScoreByIdApi = (id) =>
{
    return apiClient.get(`/api/v1/user/${id}`);
};

