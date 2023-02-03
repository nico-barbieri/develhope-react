import ClickCounter from "./components/ClickCounter";

function App() {
    return <>
        <ClickCounter initialValue={100} incrementBy={-1} />
    </>
}

export default App;