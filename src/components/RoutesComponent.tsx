import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddTask from '../pages/AddTask'

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createTask" element={<AddTask />} />
        </Routes>
    )
}

export default RoutesComponent
