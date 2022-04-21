import React, { Component } from 'react'
import {BsSearch} from 'react-icons/bs'
import './index.css'

class Data extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      isLoading: false,
      filteredData:[],
      isError: false,
      searchInput: "",
      
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (response.ok) {
      const users = await response.json()
      this.setState({ users, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  }

  renderTableHeader = () => {
    return Object.keys(this.state.users).map(attr => <th >{attr.name}</th>)
  }


  renderTableRows = () => {
    
    return this.state.users.map(user => {
      return (
        <tr key={user.id}>
        
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          
          <td>{user.phone}</td>
          <td>{user.website}</td>

          <td><button className='button' onClick={this.handleClickProfile}>viewProfile</button></td>
          <td><button className='button' onClick={this.handleClick}>viewPost</button></td>
         
        </tr>
      )
    })
  }


  handleChange = event => {
    event.preventDefault();
    this.setState({ searchInput: event.target.value }, () => {
      this.globalSearch();
    });
  };

  globalSearch = () => {
   
    let { searchInput ,users} = this.state;
    console.log(users)
    let filteredData = users.filter(value => {
      return (
        value.firstName.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.status.toLowerCase().includes(searchInput.toLowerCase()) ||
        value.visits
          .toString()
          .toLowerCase()
          .includes(searchInput.toLowerCase())
      );
    });
    this.setState({ data: filteredData });
  };



  render() {
    const { users, isLoading, isError ,searchInput} = this.state

    if (isLoading) {
      return <div>Loading...</div>
    }

    if (isError) {
      return <div>Error</div>
    }

    return users.length > 0
      ? (
        <div>
          <div className='header'>
          <h1 className='heading'>Name</h1>

          <div className='search-bar'>
            <BsSearch testid="searchIcon" className="search-icon" />
            <input
               size="11"
               name="searchInput"
               value={searchInput}
               onChange={this.handleChange}
                placeholder="search"
                 label="Search"
            />
          </div>
          </div>
        <table>
          <thead>
            <tr>
            
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Website</th>
             
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
        </div>
      ) : (
        <div>
          No users.
      </div>
      )
  }


}
export default Data 





