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

//get user
const getUser = async (token) => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_REST_API_URL}/users/me`, {
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

//update user

//get user orders

//get user order by id

export { LoginUser, registerUser };