
const StudentDetails = ({Name,Age,Course,Status,students}) => {
  return (
    <>
      <p>Name : {Name}</p>
      <p>Age : {Age}</p>
      <p>Course : {Course}</p>
      <p>Status : {Status}</p>

    {students.map((students)=>(
        <>
        <p key={i+1}>{e.id}</p>
        <p key={i+1}>{e.name}</p>
        </>
    ))}
    </>
  )
}

export default StudentDetails
