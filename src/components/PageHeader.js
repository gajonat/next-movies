import logo from '../assets/images/next-movies-logo.png';
import {FaSearch} from 'react-icons/fa'
import { useState } from 'react'

const PageHeader = ({searchTermChanged}) => {

    const [searchTerm, setSearchTerm] = useState('')

    return (
        <div className="page-header">
            <div className="page-header-logo-wrapper">
                <img src={logo} className="page-header-logo" alt="logo" />
            </div>
            <div className="page-header-search-wrapper">
                <div className="search-div">

                <input type="search" name="search" pattern=".*\S.*" required 
                value={searchTerm} onChange={(e) => {setSearchTerm(e.target.value); searchTermChanged(e.target.value)}} />
                <FaSearch className="item-icon" />
                </div>
            </div>
        </div>
    )
}

export default PageHeader
