import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import AlertMessage from './components/AlertMessage';
import Navbar from './components/Navbar';
import ProductUpdate from './components/ProductUpdate';
import Home from './views/Home';
import Kekambas from './views/Kekambas';
import Login from './views/Login';
import PostList from './views/PostList';
import Products from './views/Products';
import RacerList from './views/RacerList';
import Register from './views/Register';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Brian',
            count: 0,
            message: null,
            category: null,
            loggedIn: localStorage.getItem('token')
        }
    }

    incrementTotalCount = (step) => {
        const newCount = this.state.count + step
        this.setState({
            count: newCount
        })
    }

    // componentDidMount(){
    //     let userName = prompt('What is your name?');
    //     this.setState({
    //         name: userName
    //     })
    // }

    changeName = (newName) => {
        this.setState({
            name: newName
        })
    }

    flashMessage = (message, category='primary') => {
        this.setState({
            message,category
        })
    }

    logIn = (token) => {
        this.setState({
            loggedIn: token
        })
    }

    logOut = () =>{
        localStorage.removeItem('token');
        this.flashMessage('You have successfully logged out', 'secondary')
        this.setState({
            loggedIn: null
        })
    }


    render() {
        return (
            <>
                <Navbar loggedIn={this.state.loggedIn} logUserOut={this.logOut} />
                <div className='container'>
                    {this.state.message ? <AlertMessage message={this.state.message} category={this.state.category} flashMessage={this.flashMessage} /> : null}
                    <Routes>
                        <Route path="/" element={<Home name={this.state.name} incrementTotalCount={this.incrementTotalCount} count={this.state.count} changeName={this.changeName} />} />
                        <Route path="racers" element={<RacerList />} />
                        <Route path="kekambas" element={<Kekambas />} />
                        <Route path="posts" element={<PostList /> } />
                        <Route path="register" element={<Register flashMessage={this.flashMessage} /> } />
                        <Route path="login" element={<Login flashMessage={this.flashMessage} logUserIn={this.logIn}/> } />
                        <Route path="products" element={<Products />} />
                        <Route path="products/:prodId" element={<ProductUpdate token={this.state.loggedIn} flashMessage={this.flashMessage}/>} />
                    </Routes>
                    
                </div>
            </>
        );
    }
}
