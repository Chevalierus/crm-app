export const getUser = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/clients`, {
            method: 'GET'
        })
        const result = await response.json()
        return result
    } catch(error) {
        console.log(error);
    }
}

export const sendUser = async (user, method, id = null) => {
    try {
        const response = await fetch(`http://localhost:3000/api/clients/${method === `POST` ? `` : id}`, {
            method,
            body: JSON.stringify(user)
        });

        const result = await response.json(user);
        console.log(result);

        return result;
    } catch (error) {
        console.log(error);
    }
}

export const deleteUser = async (id) => {
    try {
        await fetch(`http://localhost:3000/api/clients/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.log(error);
    }
}

export const searchUser = async (value) => {
    try {
        const response = await fetch(`http://localhost:3000/api/clients?search=${value}`, {
            method: 'GET'
        });

        const result = await response.json();

        return result;
    } catch (error) {
        console.log(error);
    }
}