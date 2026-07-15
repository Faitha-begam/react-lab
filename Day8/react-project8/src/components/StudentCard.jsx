import EmployeeCard from "./EmployeeCard"
import StudentDetails from "./StudentDetails"
import StudentObject from "./StudentObject"
const StudentCard = () => {
  return (
    <>
    <h2><strong>Task 1 - Primitive Props</strong></h2>
      <StudentDetails Name="Sudhan" Age={25} Course="React" Status="Placed"/>
    <h2><strong>Task 2 - Primitive Props</strong></h2>
      <EmployeeCard emp = {{Name:"Noah", email:"Noah@gmail.com", city:"Chennai", experience:3}}/>
    <h2><strong>Task 3 - Array Of Objects Props</strong></h2>
    <h2><strong>Student Details</strong></h2>
      <StudentObject students = {[
  {
    id: 1,
    name: "Aarav",
    course: "Computer Science"
  },
  {
    id: 2,
    name: "Diya",
    course: "Information Technology"
  },
  {
    id: 3,
    name: "Kavin",
    course: "Artificial Intelligence"
  },
  {
    id: 4,
    name: "Meera",
    course: "Cyber Security"
  },
  {
    id: 5,
    name: "Rohan",
    course: "Data Science"
  }
]}/>
    </>
  )
}

export default StudentCard
