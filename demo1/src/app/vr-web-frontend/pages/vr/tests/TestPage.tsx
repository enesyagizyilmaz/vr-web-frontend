import TestComponent from "./TestComponent";
import {
    getTest1Grade5,
    getTest1Grade6,
    getTest1Grade7,
    getTest2Grade5,
    getTest2Grade6, getTest2Grade7,
    getTest3Grade5,
    getTest3Grade6, getTest3Grade7,
    getTest4Grade5,
    getTest5Grade5,
    getTest6Grade5,
    getTest7Grade5,
    getTest8Grade5,
    getTest9Grade5,
    getUnit1Grade5Achievements,
    getUnit1Grade6Achievements,
    getUnit1Grade7Achievements,
    getUnit2Grade5Achievements,
    getUnit3Grade5Achievements
} from "../../../api/ApiService";
import React from "react";

//GRADE 5 - UNIT 1
const Test1Grade5 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: UNIT 1: Sun, Earth and Moon"}
            testTitle={'UNIT 1: Sun, Earth and Moon: Test 1 - Grade 5'}
            testNumber={'Test 1'}
            grade={"Grade 5"}
            getTestFunction={getTest1Grade5}
            getAchievements={getUnit1Grade5Achievements}
        />
    )
};

const Test2Grade5 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: UNIT 1: Sun, Earth and Moon"}
            testTitle={'UNIT 1: Sun, Earth and Moon: Test 2 - Grade 5'}
            testNumber={'Test 2'}
            grade={"Grade 5"}
            getTestFunction={getTest2Grade5}
            getAchievements={getUnit1Grade5Achievements}
        />
    )
};

const Test3Grade5 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: UNIT 1: Sun, Earth and Moon"}
            testTitle={'UNIT 1: Sun, Earth and Moon: Test 3 - Grade 5'}
            testNumber={'Test 3'}
            grade={"Grade 5"}
            getTestFunction={getTest3Grade5}
            getAchievements={getUnit1Grade5Achievements}
        />
    )
};

//GRADE 5 - UNIT 2
const Test4Grade5 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: UNIT 2: The World of Living Things"}
            testTitle={'UNIT 2: The World of Living Things: Test 4 - Grade 5'}
            testNumber={'Test 4'}
            grade={"Grade 5"}
            getTestFunction={getTest4Grade5}
            getAchievements={getUnit2Grade5Achievements}
        />
    )
};

const Test5Grade5 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: UNIT 2: The World of Living Things"}
            testTitle={'UNIT 2: The World of Living Things: Test 5 - Grade 5'}
            testNumber={'Test 5'}
            grade={"Grade 5"}
            getTestFunction={getTest5Grade5}
            getAchievements={getUnit2Grade5Achievements}
        />
    )
};

const Test6Grade5 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: UNIT 2: The World of Living Things"}
            testTitle={'UNIT 2: The World of Living Things: Test 6 - Grade 5'}
            testNumber={'Test 6'}
            grade={"Grade 5"}
            getTestFunction={getTest6Grade5}
            getAchievements={getUnit2Grade5Achievements}
        />
    )
};

//GRADE 5 - UNIT 3
const Test7Grade5 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: UNIT 3: Measurement of Force and Friction"}
            testTitle={'UNIT 3: Measurement of Force and Friction: Test 7 - Grade 5'}
            testNumber={'Test 7'}
            grade={"Grade 5"}
            getTestFunction={getTest7Grade5}
            getAchievements={getUnit3Grade5Achievements}
        />
    )
};

const Test8Grade5 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: UNIT 3: Measurement of Force and Friction"}
            testTitle={'UNIT 3: Measurement of Force and Friction: Test 8 - Grade 5'}
            testNumber={'Test 8'}
            grade={"Grade 5"}
            getTestFunction={getTest8Grade5}
            getAchievements={getUnit3Grade5Achievements}
        />
    )
};

const Test9Grade5 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: UNIT 3: Measurement of Force and Friction"}
            testTitle={'UNIT 3: Measurement of Force and Friction: Test 9 - Grade 5'}
            testNumber={'Test 9'}
            grade={"Grade 5"}
            getTestFunction={getTest9Grade5}
            getAchievements={getUnit3Grade5Achievements}
        />
    )
};

//GRADE 6 - UNIT 1

const Test1Grade6 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: Unit 1: Solar System and Eclipses"}
            testTitle={'Unit 1: Solar System and Eclipses: Test 1 - Grade 6'}
            testNumber={'Test 1'}
            grade={"Grade 6"}
            getTestFunction={getTest1Grade6}
            getAchievements={getUnit1Grade6Achievements}
        />
    )
};

const Test2Grade6 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: Unit 1: Solar System and Eclipses"}
            testTitle={'Unit 1: Solar System and Eclipses: Test 2 - Grade 6'}
            testNumber={'Test 2'}
            grade={"Grade 6"}
            getTestFunction={getTest2Grade6}
            getAchievements={getUnit1Grade6Achievements}
        />
    )
};

const Test3Grade6 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: Unit 1: Solar System and Eclipses"}
            testTitle={'Unit 1: Solar System and Eclipses: Test 3 - Grade 6'}
            testNumber={'Test 3'}
            grade={"Grade 6"}
            getTestFunction={getTest3Grade6}
            getAchievements={getUnit1Grade6Achievements}
        />
    )
};

//GRADE 7 - UNIT 1

const Test1Grade7 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: Unit 1: Solar System and Beyond"}
            testTitle={'Unit 1: Solar System and Beyond: Test 1 - Grade 7'}
            testNumber={'Test 1'}
            grade={"Grade 7"}
            getTestFunction={getTest1Grade7}
            getAchievements={getUnit1Grade7Achievements}
        />
    )
};

const Test2Grade7 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: Unit 1: Solar System and Beyond"}
            testTitle={'Unit 1: Solar System and Beyond: Test 2 - Grade 7'}
            testNumber={'Test 2'}
            grade={"Grade 7"}
            getTestFunction={getTest2Grade7}
            getAchievements={getUnit1Grade7Achievements}
        />
    )
};

const Test3Grade7 = () =>
{
    return(
        <TestComponent
            achievementTitle={"Achievements: Unit 1: Solar System and Beyond"}
            testTitle={'Unit 1: Solar System and Beyond: Test 3 - Grade 7'}
            testNumber={'Test 3'}
            grade={"Grade 7"}
            getTestFunction={getTest3Grade7}
            getAchievements={getUnit1Grade7Achievements}
        />
    )
};

export {Test1Grade5, Test2Grade5, Test3Grade5, Test4Grade5, Test5Grade5,
        Test6Grade5, Test7Grade5, Test8Grade5, Test9Grade5, Test1Grade6,
        Test2Grade6, Test3Grade6, Test1Grade7, Test2Grade7, Test3Grade7
};