import React from 'react'
import Categories from './Categories/Categories'
import DuaPage from './DuaPage/DuaPage'
import Settings from './Settings/Settings'

const Home = () => {
    return (
        <div className='main-container'>
            <div className="categories">
                <Categories></Categories>
            </div>
            <div className="dua-page">
                <DuaPage></DuaPage>            
            </div>
            <div className="settings">
                <Settings></Settings>
            </div>
        </div>
    )
}

export default  Home