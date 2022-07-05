import './styles/output.css'
import './styles/index.css'
import MainRoutes from "./route/mainRoute";
import { HashRouter as Router } from "react-router-dom";

function App() {
    return (
        <Router>
            <MainRoutes />
        </Router>
    )
}

export default App
