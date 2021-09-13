import React from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import { delectAction, idForEdit } from '../actions';
import toast from 'react-hot-toast';
import './TableOfRegister';

function TableOfRegister({ register, delectAction, idForEdit}) {
  const handleClickDelete = (id) => {
    toast.error('Register deleted');
    delectAction(id);
  };
  return (
    <fieldset>
      <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last name</th>
            <th>User name</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {console.log(register)}
            {register.map(({ id, fName, lName, city, state }) => (
              <tr>
                <td>{id}</td>
                <td>{fName}</td>
                <td>{lName}</td>
                <td>{city}</td>
                <td>{state}</td>
                <div>
                  <Button 
                  onClick={() => idForEdit(id)}
                  variant="outline-warning"
                  >
                    <AiOutlineEdit />
                  </Button>
                  <Button
                    onClick={() => handleClickDelete(id)}
                    variant="outline-danger"
                  >
                    <AiOutlineDelete />
                  </Button>
                </div>
              </tr>
            ))
          
            }
        </tbody>
      </Table>
    </fieldset>
  );
}
const mapStateToProps = (state) => ({
  register: state.registerReducer.register,
});

const mapDispatchToProps = { delectAction, idForEdit };

export default connect(mapStateToProps, mapDispatchToProps)(TableOfRegister);
