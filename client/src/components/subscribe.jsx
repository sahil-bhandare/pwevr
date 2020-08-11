import React, { Component } from 'react';
import { subscribe } from './userfunctions';
import '../styles/subscribe.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from '../images/logo.svg';
import Header from '../components/header.jsx';
import Menu from '../components/menu.jsx';
import Footer from '../components/footer.jsx';

class Subscribe extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
    }

    if(newUser.first_name === '' || newUser.last_name === '' || newUser.email === '') {
      alert("Please Enter All The Details.")
    }

    else {
      subscribe(newUser).then(res => {
      alert("Successfully Subscribed!")
      this.props.history.push(`/`)
    })
    }
  }

  render() {

    var date = new Date();
    var year = date.getFullYear();

    return (
      <div>
      <Header />
      <Menu />
        <div class="bottom-container">
          <form noValidate onSubmit={this.onSubmit}>
              <strong><u><p className="subscribe-heading">Subscribe</p></u></strong>
                <p class="tags">First Name</p>
                <input
                  type="text"
                  name="first_name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                  autoComplete="off"
                />
                <br/>
                <p class="tags">Last Name</p>
                <input
                  type="text"
                  name="last_name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                  autoComplete="off"
                />
                <br/>
                <p class="tags">Email Address</p>
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  autoComplete="off"
                  required
                />
                <br />
                <button type="submit" className="subscribe-button">
                  Subscribe
                </button>
            </form>
          <Footer />
          </div>
      </div>
    )
  }

}

export default Subscribe;
