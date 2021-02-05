import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStudentDetails, clearStudentDetails, deleteStudent } from '../actions'
import Header from '../components/header';
import { BrowserRouter, Switch, Route ,useHistory } from 'react-router-dom'

const StudentDetails = ({ getStudentDetails, clearStudentDetails,deleteStudent, details, match }) => {
    const id = match.params.id
    console.log(id)
    useEffect(() => {
        console.log('as comp did mount')
        // debugger;
        getStudentDetails(id)

        return () => {
            console.log('cleanup (unmount)')
            clearStudentDetails()
        }
    }, [])

    const history = useHistory();

    function handleClick() {
      history.push("/");
    }

    function deleteStudent(id) {
        deleteStudent(id)
        handleClick()
      }

    const renderStudentDetails = (details) => {
        if (details && details.id) {
            return (
                <div>
                    <Header />
                    <div style={{ textAlign: 'center' }} className="mt-3">

                        <h3>Name : {details.name}</h3>
                        <p>Age : {details.age}</p>
                        <p>Phone : {details.phone}</p>
                        <input className="btn btn-primary ml-3" type="submit" value="Delete" onClick={()=>{deleteStudent(id);}}/>
                        
                    </div>
                </div>
            )
        }
        return ''
    }
    return (<div className="alert alert-light">
        {renderStudentDetails(details)}
    </div>)

}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.students.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails, clearStudentDetails ,deleteStudent}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails)