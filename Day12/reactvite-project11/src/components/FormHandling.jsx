import { useState } from "react"

const FormHandling = () => {

  const [userData, setUserData] = useState("")
  const [arr, setArr] = useState([])

  const [studentName, setStudentName] = useState("")
  const [studentCourse, setStudentCourse] = useState("")
  const [arr1, setArr1] = useState([])

  const changeData = (e) => {
    setUserData(e.target.value)
  }

  const updateData = () => {
    setArr([...arr, userData])
    setUserData("")
  }

  const studentUpdatedValue = () => {
    setArr1([...arr1,
    {
      name: studentName,
      course: studentCourse
    }
    ])

    setStudentName("")
    setStudentCourse("")
  }

  return (
    <>
      <div className="bg-lime-100 w-90 p-7 mt-4 m-auto rounded-2xl">
        <p><strong>Display Content:</strong> {arr.join("- ")}</p> <br />

        <input
          className="bg-slate-100 w-70 p-3 rounded-xl" type="text" placeholder="Enter Your Name" value={userData} onChange={changeData} /><br /><br />

        <button
          className="bg-slate-300 p-3 mx-25 rounded-xl"
          onClick={updateData}>Submit</button>
      </div>


      <div className="bg-lime-100 w-90 p-7 mt-4 m-auto rounded-2xl">
        <p><strong>Student Details</strong></p>

        {arr1.map((student, index) => (
          <p key={index}>
            {student.name} - {student.course}
          </p>
        ))}

        <input
          type="text"
          placeholder="Enter Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Course"
          value={studentCourse}
          onChange={(e) => setStudentCourse(e.target.value)}
        />

        <br /><br />

        <button
          className="bg-slate-300 p-3 mx-25 rounded-xl"
          onClick={studentUpdatedValue}
        >
          Submit
        </button>
      </div>
    </>
  )
}

export default FormHandling