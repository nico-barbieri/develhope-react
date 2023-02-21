import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";

function App() {    
    return <>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/:name" element={<Welcome />} />
        </Routes>
    </>
}

export default App;