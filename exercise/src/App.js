import { Link, Route, Routes } from "react-router-dom";
import ClickCounter from "./components/ClickCounter";
import Welcome from "./components/Welcome";
import GithubUserList from "./pages/GithubUserList";
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
            <Route path="/" element={<Welcome name='Nico'/>} />
            <Route path="counter" element={<ClickCounter />}/>
            <Route path="users">
                <Route index element={<GithubUserList />}/>
                <Route path=":username" element={<ShowGithubUser />}/>
            </Route>
            <Route path="*" element={<div>
                <div>This page does not exist</div>
                <Link to='/'>GO HOME</Link>
                </div>} />
        </Routes>
    </div>
    </>
}

export default App;