import { Age } from "./Age"

export function Welcome({ name, age }) {
    return (
        <div>
            <p>Welcome, <strong>{name}</strong></p>
            {age > 18 && <Age age={age} />}
            {age < 18 && <p>You are very young!</p>}
        </div>
    )
}
