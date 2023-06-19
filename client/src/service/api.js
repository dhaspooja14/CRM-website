import axios from "axios";

const Url = 'http://localhost:8000/edit';

export const getUserByEmail = async (email) => {
    try{
        return await axios.get(`${Url}/${email}`);
    }catch (error){
        console.log("Error",error);
    }
}

export const editUser = async(user, email) => {
    try {
        return await axios.post(`${Url}/${email}`, user);
    }catch (error) {
        console.log("Error",error);
        throw error;
    }
}

export const deleteUser = async (email) => {
    try {
        return await axios.delete(`${Url}/${email}`);
    }catch (error) {
        console.log("Error", error);
    }
}