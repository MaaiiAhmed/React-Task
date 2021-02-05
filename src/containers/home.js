import { Component } from 'react';
import Header from '../components/header';
import Search from './search';
import StudentsList from '../containers/studentList';
import STUDENTSLIST from '../db.json';
class Home extends Component {
    constructor() {
        super();
        // console.log(NEWSLIST)
        this.state = {
            filteredList: STUDENTSLIST,
            studentsList: STUDENTSLIST
        }
    }


    filterList = (keywords) => {
        console.log(keywords)

        this.setState((state) => {
            state.filteredList = state.studentsList.filter((item) => {
                return item.name.toLowerCase().includes(keywords.toLowerCase())
            })
            return state;
        })

    }
    render = () => {
        return (
            <div>
                  <Header /> 
                <Search onKeywordsChange={this.filterList}/>
                <StudentsList list={this.state.filteredList} />
            </div>
        )
    }
}
export default Home;


// import { useRef } from 'react'
// import { getStudents,getAllStudents } from '../actions'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import Header from '../components/header'

// const Home = ({ getStudents ,getAllStudents, list}) => {
//     var news;
//     const name = useRef()
//     const searchByName = () => {
//         getStudents(name.current.value)
//     }
//     const getAllStudentsHome = () => {
//         list = getAllStudents()
//          news = list.map((item) => {
//             return (
//                 <div key={item.id} className="item" >
//                     <h3>{item.name}</h3>
//                     <p>{item.age}</p>
//                 </div>
//             )
//         })
//     } 
//     // const news = (list) => {
//     //     console.log("1111111111111111111 "+list)
//     //     list.map((item) => {
//     //         return (
//     //             <div key={item.id} className="item" >
//     //                 <h3>{item.name}</h3>
//     //                 <p>{item.age}</p>
//     //             </div>
//     //         )
//     //     })
//     // }

//     return <div>
//         <Header />
//         <div className="text-center mt-3">
//             <input ref={name} className="form-control rounded-pill text-center" type="text" placeholder="Search By Name"
//             onChange={getAllStudentsHome} />
//             {news}
//         </div>
        
//     </div>
// }

// const mapStateToProps = (state) => {
//     console.log(state.students.list)
//     return {
//         list: state.students.list
//     }
// }


// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ getAllStudents,getStudents }, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Home)