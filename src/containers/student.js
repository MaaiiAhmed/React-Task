import { Link } from "react-router-dom"

const Student = ({ studentInfo }) => {
    if (studentInfo && studentInfo.name)
        return (
            <div>
                <Link to={`students/${studentInfo.id}`}>
            <div className="alert alert-dark text-center">
                <h4 className="text-center">Name : {studentInfo.name}</h4>
                Age : {studentInfo.age}
            </div>
            </Link>
            </div>
        )
    return <p>
        No data available
    </p>
}

export default Student