import React, { Component } from "react";
import Card from './cardPage.jsx'
import './propsPage.css'

class Stateful extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then(dataUser => {
            this.setState({ users: dataUser });
        });
  }

  render() {
    return (
      <div>
        <h1 className='titleclass'>Componente De Clase con Props Usando Fetch</h1>
          <ul className='list'>
            {
              
              this.state.users.map((user) => {
                return <Card
                key={user.id}
                name={user.name} 
                nickname={user.username} 
                email={user.email} 
                code={user.address.zipcode} 
                city={user.city} 
                phone={user.phone} 
                lat={user.address.geo.lat}
                lng={user.address.geo.lng}
                />
              })
            }
          </ul>
      </div>
    );
  }
}

export default Stateful;
