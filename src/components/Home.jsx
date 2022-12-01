import React from "react";
import { connect } from "react-redux";
import { propsToState } from "../store";
import { useDispatch } from "react-redux";
import {
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import Form from "./Form";

export function Home(props) {
  const dispatch = useDispatch();

  return (
    <MDBContainer style={{ minHeight: "63vh" }}>
      <Form />
      <MDBTable>
        <MDBTableHead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Customer Name</th>
            <th scope="col">Account Number</th>
            <th scope="col">Account Type</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {props.accounts.map((account) => {
            return (
              <tr key={account.id}>
                <th scope="row">{account.id}</th>
                <td>{account.customerName}</td>
                <td>{account.accountNumber}</td>
                <td>{account.accountType}</td>
                <td>
                  <MDBBtn
                    color="danger"
                    onClick={() => {
                      dispatch({
                        type: "DELETE_USER",
                        payload: account.id,
                      });
                    }}
                  >
                    <MDBIcon fas icon="trash" />
                  </MDBBtn>
                </td>
              </tr>
            );
          })}
        </MDBTableBody>
      </MDBTable>
      <h3>Number of accounts : {props.accounts.length}</h3>
    </MDBContainer>
  );
}

export default connect(propsToState)(Home);
