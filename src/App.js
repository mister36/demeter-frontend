import { Route, Routes } from "react-router-dom";
import Home from "./components/home2";
import Main from "./components/main";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </div>
    );
}

export default App;
