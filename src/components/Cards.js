import './Cards.css';
import { useEffect, useState } from "react";
import Card from "./Card"
import { getCoursesApi } from "../services/courses"

function Cards() {
  const [courses, updateCourses] = useState([]);

async function getCourses() {
const courses = await getCoursesApi();
updateCourses (courses); 
}

useEffect (() => {
console.log ("consumir una api")
   getCourses(); 
 }, []); 

  return (
    <div className="Cards">
        {
          courses.map(course => { 
          return <Card 
            name={course.name}
            icon={course.icon}
            background={course.background}
            totalQuizzes ={course.totalQuizzes}
            users={course.users}
            key={course.id} 
          />
        })
        }     
    </div>
  );
}

export default Cards;


//Desafio pasar de una api y renderizar algo y que al hacer clik te diga algo