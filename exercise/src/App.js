import Counter from "./components/Counter";

function App() {
    return <>
        <Counter initialValue={1000} incrementBy={-1} />
    </>
}

export default App;