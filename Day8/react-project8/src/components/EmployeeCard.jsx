
const EmployeeCard = ({emp}) => {
  return (
    <>
      <p>Employee Name : {emp.Name}</p>
      <p>Employee e-mail : {emp.email}</p>
      <p>Employee City : {emp.EmployeeCardcity}</p>
      <p>Employee Experience : {emp.experience}</p>
    </>
  )
}

export default EmployeeCard
