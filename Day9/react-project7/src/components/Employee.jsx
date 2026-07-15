const Cards = ({emp}) => {
  return (
    <>
      <h2><strong>Employee Details</strong></h2> <br />
      <p>Name : {emp.Name}</p>
      <p>E-mail : {emp.Email}</p>
      <p>Department : {emp.Department}</p>
    </>
  )
}

export default Cards
