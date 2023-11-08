import { Hello, Message } from "./Messages";

function App() {
    return (
        <div>
            <Hello />
            <Hello />
            <Message />
            <Message />
            {/* è possibile richiamare più volte lo stesso elemento 
            rendendo possibile il riutilizzo del codice. */}
        </div>
    )
}

export default App;