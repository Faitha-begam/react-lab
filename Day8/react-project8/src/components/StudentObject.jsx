const StudentObject = ({students}) => {
  return (
    <>
       {students.map((students)=>(
        <div className="" key={students.id}>
        <p>Student ID: {students.id}</p>
        <p>Student Name: {students.name}</p>
        <p>Course Name: {students.course}</p>
        </div>
    ))}
    </>
  )
}

export default StudentObject
