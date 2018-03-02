import React, {Component} from 'react'
import Search from './search'
import './search.css'

class Main extends Component {
    render(){
        return(
            <div className='mainSearch'>
               <Search />
            </div>
        )
    }
}

export default Main;