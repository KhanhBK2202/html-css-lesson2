import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { publicRoutes } from './routes'

function App() {
    return (
        <div className="app">
            <Header />

            <Router>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        return <Route key={index} path={route.path} element={<route.component />} />
                    })}
                </Routes>
            </Router>

            <Footer />
        </div>
    )
}

export default App