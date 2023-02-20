import Counter from "./components/Counter";

function App() {    
    return <>
        <Counter initialValue={10} step={-1} />
    </>
}

export default App;