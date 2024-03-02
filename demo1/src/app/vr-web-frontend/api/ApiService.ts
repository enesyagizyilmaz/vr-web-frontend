import axios from "axios";

const apiClient = axios.create
(
    {
        baseURL: 'http://localhost:8080'
    }
);

export const getTest1Grade5 = () =>
{
    return apiClient.get("/api/questions/test1grade5")
};

export const getTest2Grade5 = () =>
{
    return apiClient.get("/api/questions/test2grade5")
};

export const getTest3Grade5 = () =>
{
    return apiClient.get("/api/questions/test3grade5")
};

export const getTest4Grade5 = () =>
{
    return apiClient.get("/api/questions/test4grade5")
};

export const getTest5Grade5 = () =>
{
    return apiClient.get("/api/questions/test5grade5")
};

export const getTest6Grade5 = () =>
{
    return apiClient.get("/api/questions/test6grade5")
};

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

