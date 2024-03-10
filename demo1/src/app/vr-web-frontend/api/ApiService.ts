import axios from "axios";

const apiClient = axios.create
(
    {
        baseURL: 'http://localhost:8080'
    }
);

//ACHIEVEMENT API's
export const getUnit1Grade5Achievements = () =>
{
    return apiClient.get("/api/achievements/unit1grade5achievement");
};

export const getUnit2Grade5Achievements = () =>
{
    return apiClient.get("/api/achievements/unit2grade5achievement");
};

export const getUnit3Grade5Achievements = () =>
{
    return apiClient.get("/api/achievements/unit3grade5achievement");
};

export const getUnit4Grade5Achievements = () =>
{
    return apiClient.get("/api/achievements/unit4grade5achievement");
};

export const getUnit5Grade5Achievements = () =>
{
    return apiClient.get("/api/achievements/unit5grade5achievement");
};

export const getUnit6Grade5Achievements = () =>
{
    return apiClient.get("/api/achievements/unit6grade5achievement");
};

export const getUnit7Grade5Achievements = () =>
{
    return apiClient.get("/api/achievements/unit7grade5achievement");
};

export const getUnit1Grade6Achievements = () =>
{
    return apiClient.get("/api/achievements/unit1grade6achievement");
};

export const getUnit2Grade6Achievements = () =>
{
    return apiClient.get("/api/achievements/unit2grade6achievement");
};

export const getUnit3Grade6Achievements = () =>
{
    return apiClient.get("/api/achievements/unit3grade6achievement");
};

export const getUnit4Grade6Achievements = () =>
{
    return apiClient.get("/api/achievements/unit4grade6achievement");
};

export const getUnit5Grade6Achievements = () =>
{
    return apiClient.get("/api/achievements/unit5grade6achievement");
};

export const getUnit6Grade6Achievements = () =>
{
    return apiClient.get("/api/achievements/unit6grade6achievement");
};

export const getUnit7Grade6Achievements = () =>
{
    return apiClient.get("/api/achievements/unit7grade6achievement");
};

export const getUnit1Grade7Achievements = () =>
{
    return apiClient.get("/api/achievements/unit1grade7achievement");
};

//TEST(QUIZ) API's
export const getTest1Grade5 = () =>
{
    return apiClient.get("/api/questions/test1grade5");
};

export const getTest2Grade5 = () =>
{
    return apiClient.get("/api/questions/test2grade5");
};

export const getTest3Grade5 = () =>
{
    return apiClient.get("/api/questions/test3grade5");
};

export const getTest4Grade5 = () =>
{
    return apiClient.get("/api/questions/test4grade5");
};

export const getTest5Grade5 = () =>
{
    return apiClient.get("/api/questions/test5grade5");
};

export const getTest6Grade5 = () =>
{
    return apiClient.get("/api/questions/test6grade5");
};

export const getTest7Grade5 = () =>
{
    return apiClient.get("/api/questions/test7grade5");
};

export const getTest8Grade5 = () =>
{
    return apiClient.get("/api/questions/test8grade5");
};

export const getTest9Grade5 = () =>
{
    return apiClient.get("/api/questions/test9grade5");
};
export const getTest10Grade5 = () =>
{
    return apiClient.get("/api/questions/test10grade5");
};

export const getTest11Grade5 = () =>
{
    return apiClient.get("/api/questions/test11grade5");
};

export const getTest12Grade5 = () =>
{
    return apiClient.get("/api/questions/test12grade5");
};

export const getTest13Grade5 = () =>
{
    return apiClient.get("/api/questions/test13grade5");
};

export const getTest14Grade5 = () =>
{
    return apiClient.get("/api/questions/test14grade5");
};

export const getTest15Grade5 = () =>
{
    return apiClient.get("/api/questions/test15grade5");
};

export const getTest16Grade5 = () =>
{
    return apiClient.get("/api/questions/test16grade5");
};

export const getTest17Grade5 = () =>
{
    return apiClient.get("/api/questions/test17grade5");
};

export const getTest18Grade5 = () =>
{
    return apiClient.get("/api/questions/test18grade5");
};

export const getTest19Grade5 = () =>
{
    return apiClient.get("/api/questions/test19grade5");
};
export const getTest20Grade5 = () =>
{
    return apiClient.get("/api/questions/test20grade5");
};

export const getTest21Grade5 = () =>
{
    return apiClient.get("/api/questions/test21grade5");
};

export const getTest1Grade6 = () =>
{
    return apiClient.get("/api/questions/test1grade6");
};

export const getTest2Grade6 = () =>
{
    return apiClient.get("/api/questions/test2grade6");
};

export const getTest3Grade6 = () =>
{
    return apiClient.get("/api/questions/test3grade6");
};

export const getTest4Grade6 = () =>
{
    return apiClient.get("/api/questions/test4grade6");
};

export const getTest5Grade6 = () =>
{
    return apiClient.get("/api/questions/test5grade6");
};

export const getTest6Grade6 = () =>
{
    return apiClient.get("/api/questions/test6grade6");
};

export const getTest7Grade6 = () =>
{
    return apiClient.get("/api/questions/test7grade6");
};

export const getTest8Grade6 = () =>
{
    return apiClient.get("/api/questions/test8grade6");
};

export const getTest9Grade6 = () =>
{
    return apiClient.get("/api/questions/test9grade6");
};

export const getTest10Grade6 = () =>
{
    return apiClient.get("/api/questions/test10grade6");
};

export const getTest11Grade6 = () =>
{
    return apiClient.get("/api/questions/test11grade6");
};

export const getTest12Grade6 = () =>
{
    return apiClient.get("/api/questions/test12grade6");
};

export const getTest13Grade6 = () =>
{
    return apiClient.get("/api/questions/test13grade6");
};

export const getTest14Grade6 = () =>
{
    return apiClient.get("/api/questions/test14grade6");
};

export const getTest15Grade6 = () =>
{
    return apiClient.get("/api/questions/test15grade6");
};

export const getTest16Grade6 = () =>
{
    return apiClient.get("/api/questions/test16grade6");
};

export const getTest17Grade6 = () =>
{
    return apiClient.get("/api/questions/test17grade6");
};

export const getTest18Grade6 = () =>
{
    return apiClient.get("/api/questions/test18grade6");
};

export const getTest19Grade6 = () =>
{
    return apiClient.get("/api/questions/test19grade6");
};

export const getTest20Grade6 = () =>
{
    return apiClient.get("/api/questions/test20grade6");
};

export const getTest21Grade6 = () =>
{
    return apiClient.get("/api/questions/test21grade6");
};

export const getTest1Grade7 = () =>
{
    return apiClient.get("/api/questions/test1grade7");
};

export const getTest2Grade7 = () =>
{
    return apiClient.get("/api/questions/test2grade7");
};

export const getTest3Grade7 = () =>
{
    return apiClient.get("/api/questions/test3grade7");
};

//AUTHENTICATION API's
export const signUpApi = (body) =>
{
    return apiClient.post(`/api/v1/users`,body);
};

export const login = (credentials) =>
{
  return apiClient.post("/api/v1/auth",credentials);
};

//SCORE API's
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

