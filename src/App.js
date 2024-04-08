import styles from './App.module.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import Footer from './components/Footer'
import { useEffect, useRef, useState } from 'react'

// let tempRef
function App() {
    // const vid = useRef()
    // const tempRef = useRef()
    // const [isClicked, setIsClicked] = useState()
    // useEffect(() => {
    //     console.log(vidRef)
    //     // console.log(isClicked)
    // }, [])

    return (
        <div className={styles.app}>
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
