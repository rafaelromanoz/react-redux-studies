import React from 'react';
import { Route } from 'react-router';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Header from '../components/Header';
import Register from './Register';
import AddEmployee from './AddEmployee';
import { AiFillHome } from 'react-icons/ai';
import { BsFillArchiveFill } from 'react-icons/bs';
import { RiRegisteredFill } from 'react-icons/ri';
import Home from './Home';

function SideBar() {
  return (
    <Route
      render={({ location, history }) => (
        <React.Fragment>
          <SideNav
            style={{ background: '#ADA996' }}
            onSelect={(selected) => {
              const to = '/' + selected;
              if (location.pathname !== to) {
                history.push(to);
              }
            }}
          >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
              <NavItem eventKey="home">
                <NavIcon>
                  <AiFillHome />
                </NavIcon>
                <NavText>Home</NavText>
              </NavItem>
              <NavItem eventKey="register">
                <NavIcon>
                  <RiRegisteredFill />
                </NavIcon>
                <NavText>Register</NavText>
              </NavItem>
              <NavItem eventKey="addEmployee">
                <NavIcon>
                  <BsFillArchiveFill />
                </NavIcon>
                <NavText>Add-Employee</NavText>
              </NavItem>
            </SideNav.Nav>
          </SideNav>
          <main>
            <Header></Header>
            <Route path="/home" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/addEmployee" component={AddEmployee} />
          </main>
        </React.Fragment>
      )}
    />
  );
}

export default SideBar;
