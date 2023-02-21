import { Link, Route, Routes } from "react-router-dom";
import ClickCounter from "./components/ClickCounter";
import Welcome from "./components/Welcome";
import ShowGithubUser from "./pages/ShowGithubUser";

function App() {    
    return <>
    <div>
        <nav style={{background: '#020202', color: '#F2F2F2', display: 'flex', gap: '1rem', padding: '1rem'}}>
            <h1>Site :)</h1>
            <Link to="/">HOME</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/users/">Github User</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/:name" element={<Welcome />} />
            <Route path="counter" element={<ClickCounter />}/>
            <Route path="users">
                <Route index element={<p>no username provided</p>}/>
                <Route path=":username" element={<ShowGithubUser />}/>
            </Route>
        </Routes>
    </div>
    </>
}

export default App;