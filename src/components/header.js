import { useHistory } from 'react-router-dom'
import Modal from 'react-modal';
import React from 'react';
import { addStudent,clearStudentDetails } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useEffect } from 'react'


const Header = ({addStudent,clearStudentDetails}) => {
    const history = useHistory();
    useEffect(() => {
        console.log('as comp did mount')
        // debugger;

        return () => {
            console.log('cleanup (unmount)')
            clearStudentDetails()
        }
    }, [])
    function handleClick() {
        history.push("/");
    }
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState('');
    const [phone, setPhone] = React.useState('');

    function openModal() {
        setIsOpen(true);
    }
    const customStyles = {
        content : {
          top                   : '40%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          width : '40%'
        }
      };

      function addNewStudent(name,age,phone) {
        addStudent(name,age,phone)
        handleClick()
      }
    return <div>
        <nav class="navbar navbar-dark bg-dark justify-content-between">
            <a class="navbar-brand" onClick={handleClick}>Home</a>
            <form class="form-inline">
                <input type="button" class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#exampleModal" value="Add Student" onClick={openModal}/>
            </form>
        </nav>

        <div>
            <Modal style={customStyles} isOpen={modalIsOpen} >
                <h5 style={{textAlign:"center"}}>Add Student</h5>
                <hr />
                <input type="text" class="form-control" placeholder="Enter Name" onChange={event => setName(event.target.value)} />
                <hr />
                <input type="text" class="form-control" placeholder="Enter Age" onChange={event => setAge(event.target.value)}/>
                <hr />
                <input type="text" class="form-control" placeholder="Enter Phone" onChange={event => setPhone(event.target.value)} />
                <hr />
                <input type="button" class="btn btn-primary" value="Add Student" style={{marginLeft:"40%"}} onClick={()=>{addNewStudent(name,age,phone)}}/>
            </Modal>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        details: state.students.details
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addStudent,clearStudentDetails}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)