export function Welcome({ name }) {
/*     return <p>Welcome, {name}!</p> */
    return <p>Welcome, {name?name:'user'}!</p> // caso in cui posso utilizzare un valore di default con l'operatore ternario.
} 