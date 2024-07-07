import Cookies from "js-cookie";

// login
const LoginUser = async (identifier, password) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/auth/local`, {
            method: 'POST',
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ identifier, password }),
        });
        const data = await response.json();
        const token = data.jwt;
        const userId = data.user.id;
        if (token) {
            // Set the JWT token in cookies
            Cookies.set('jwt', token, { expires: 7 }); // Cookie expires in 7 days
        }
        if (userId) {
            // Set the user id in cookies
            localStorage.setItem('userId', userId);
        }
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};

//register
const registerUser = async (userData) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/auth/local/register`, {
            method: 'POST',
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
};


//logout
const logoutUser = () => {
    Cookies.remove('jwt');
};

//get user
const getUser = async (token) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/users/me?populate=*`, {
            method: 'GET',
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

//delete user
const deleteUser = async (token) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/users/me`, {
            method: 'DELETE',
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

//update user
const updateUser = async (userData, token) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/users/me`, {
            method: 'PUT',
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(userData),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export { LoginUser, registerUser, logoutUser, getUser, deleteUser, updateUser};