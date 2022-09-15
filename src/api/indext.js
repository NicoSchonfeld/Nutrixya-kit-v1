import axios from "axios";

export const ApiDefaultUsers = () => {

    const url = "http://127.0.0.1:5000/api/";

    const PostUsersRegister = async (username, email, password) => {
        try {
            return await axios.post(url + "users/register", {
                username: username,
                email: email,
                password: password
            });
        } catch (error) {
            console.log("fallo al PostUsersRegister" + error);
            return false;
        }
    };
    const PostUsersLogin = async (email, password) => {
        try {
            return await axios.post(url + "users/login", {
                email: email,
                password: password
            });
        } catch (error) {
            console.log("fallo al logearse" + error);
            return false;
        }

    };

    const PostUsersEdit = async (id, username, email, token) => {
        try {
            return await axios.post(url + "users/edit", {
                userID: id,
                username: username,
                email: email
            }, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error) {
            console.log("fallo al PostUsersEdit" + error);
            return false;
        }
    };

    return { PostUsersRegister, PostUsersLogin, PostUsersEdit };
}