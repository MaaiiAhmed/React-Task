const baseURL = "http://localhost:3001/students"

export const getAllStudents = async () => {
    let payload;
    try {
        let response = await fetch(`${baseURL}`)
        payload = await response.json()
        console.log(payload)
    }
    catch (err) {
        console.log(err)
    }
    return {
        type: 'STUDENTS_LIST',
        payload
    }
}

export const getStudents = async (name) => {
    let payload;
    try {
        let response = await fetch(`${baseURL}?name=${name}`)
        payload = await response.json()
        console.log(payload)
    }
    catch (err) {
        console.log(err)
    }
    return {
        type: 'STUDENTS_LIST',
        payload
    }
}

export const getStudentDetails = async (id) => {
    let payload;
    try {
        let response = await fetch(`${baseURL}/${id}`)
        payload = await response.json()
        console.log(payload)
    }
    catch (err) {
        console.log(err)
    }
    return {
        type: 'STUDENT_DETAILS',
        payload
    }

}

export const addStudent = async (name, age, phone) => {
    let payload;
    try {
        let response = await fetch(`${baseURL}`, {
            method: 'POST',
            body: JSON.stringify({
                "id": 90,
                "name": name,
                "age": age,
                "phone": phone
            })
        })
        payload = await response.json()
        console.log(payload)
    }
    catch (err) {
        console.log(err)
    }
    return {
        type: 'ADD_STUDENT',
        payload
    }

}

export const deleteStudent = async (id) => {

    try {
        await fetch(`${baseURL}/${id}`, {
            method: 'DELETE',
        })
    }
    catch (err) {
        console.log(err)
    }

}

export const clearStudentDetails = () => {
    return {
        type: 'CLEAR_STUDENT_DETAILS',
        payload: null
    }
}




