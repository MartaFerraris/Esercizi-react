export function UncontrolledLogin() {

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);

        const data = {
            username: formData.get('username'),
            password: formData.get('password'),
            checkbox: formData.get('checkbox') === 'on' ? true : false,
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

// Vantaggi di usare FormData sono:
// - semplifica il raccoglimento dei valori degli input;
// - gestisce in modo autonomo l'inclusione degli elementi del modulo;
// - facilità l'invio dei dati.

// Svantaggi di usare FormData sono:
// - possono insorgere problemi di compatibilità con i browser;
// - si possono avere delle limitazioni di eleborazione dati se troppo complessi;
// - non è dinamico.