import Employee from "../components/Employee"

const EmployeePage = () => {
  return (
    <>
    <div className="bg-green-200 w-80 p-13 m-auto mt-30 rounded-lg">
    <Employee emp ={{Name:"Faitha", Email:"faitha@gmail.com", Department:"IT"}}/>
    </div>
    </>
  )
}

export default EmployeePage
