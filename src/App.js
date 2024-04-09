import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import Footer from './components/Footer'

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
