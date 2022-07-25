import './styles/output.css'
import './styles/index.css'
import MainRoutes from "./route/mainRoute";
import { HashRouter as Router } from "react-router-dom";
import { ClientProvider } from "./contexts/client.context";

function App() {
    return (
        <ClientProvider>
            <Router>
                <MainRoutes />
            </Router>
        </ClientProvider>
    )
}

export default App
