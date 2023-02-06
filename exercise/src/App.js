import ClickCounter from "./components/ClickCounter";

function App() {
    const initialValue = 100;
    const incrementBy = -1; 
    const onCountChange = (value) =>{
        console.log('you clicked ' + Math.abs((initialValue-value)/incrementBy) + " times");
    }
    return <>
        <ClickCounter initialValue={initialValue} incrementBy={incrementBy} onCountChange={onCountChange}/>
    </>
}

export default App;