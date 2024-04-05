import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './App.module.css'
import Card from './components/Card'
import Dropdown from './components/Dropdown'
import {
    faLifeRing,
    faLaptop,
    faHeadset,
    faGear,
    faShareNodes,
    faUsersViewfinder,
    faBars,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import Footer from './components/Footer'

function App() {

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
