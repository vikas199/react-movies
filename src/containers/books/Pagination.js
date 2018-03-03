import React from 'react'
import './search.css'

const Pagination = (props) => {
    return(
        < select className='form-control' value={props.maxResults} onChange={props.onChange}>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
        <option value='25'>25</option>
        <option value='30'>30</option>
        <option value='35'>35</option>
        <option value='40'>40</option>
    </select>
    )
}

export default Pagination;