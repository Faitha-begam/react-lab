const Student = ({name,age,course}) => {
  return (
    <>
    <div className="bg-green-200 w-70 p-13 m-auto mt-30 rounded-lg">
    <h2><strong>Student Data</strong></h2> <br />
     <p>Name : {name}</p>
     <p>Age : {age}</p>
     <p>Course : {course}</p>
     </div> 
    </>
  )
}

export default Student
