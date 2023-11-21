export function UncontrolledLogin() {

    function handleSubmit(event) {
        event.preventDefault();

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const checkbox = event.target.elements.checkbox.checked;

        const data = {
            username,
            password,
            checkbox
        };

        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Uncontrolled login</h2>
            <label>Username:</label>
            <input name="username" />
            <label>Password:</label>
            <input name="password" type="password"/>
            <input name="checkbox" type="checkbox"/>
            <button type="submit">Login</button>
            <button type="reset">Reset</button>
        </form>
    )
}