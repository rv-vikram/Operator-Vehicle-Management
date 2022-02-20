import { useState } from "react"


export function Login() {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setLogin({ ...login, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postData(login);
    }

    async function postData(items) {
        try {
            const res = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: {
                    'content-type': "application/json"
                },
                body: JSON.stringify(items)
            });
            const response = await res.json();
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input onInput={handleChange} type="text" name="username" />
            <label htmlFor="password">Password</label>
            <input onInput={handleChange} type="password" name="password" />
            <input type="submit" />
        </form>
    </div>
}