import {Component} from 'react'
import Header from '../Header'
import Products from '../Products'
import Footer from '../Footer'
import './index.css'

class Home extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Products/>
                <Footer/>
            </div>
        )
    }
}

export default Home