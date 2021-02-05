import { Component } from "react";
import Student from "./student";

export default class StudentsList extends Component{
    constructor(props){
        super(props)
        this.state = {
            students:[],
        }
        this.baseURL = "http://localhost:3001/students"
    }

    renderStudents({students}){
        if(students&&students.length>0){
            return students.map((student)=>{
                return <Student key={student.id} studentInfo={student}/>
            })
        }

        return (
            <p className="text-danger">No students available</p>
        )
    }

    render(){
        //logic
        console.log('render')
        return(
            <div> 
                {this.renderStudents(this.state)}
             </div>)
    }

    componentDidMount(){
        fetch(this.baseURL,{method:'GET'})
        .then((response)=>{
            
            if(response.status == 200)
                return response.json()
        })
        .then((data)=>{
            console.log(data)
            this.setState({students:data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}