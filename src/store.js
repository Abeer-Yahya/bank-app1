import { createStore } from "redux";

const initState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings",
    },
    {
      id: 2,
      customerName: "Ahmad Zahran",
      accountNumber: "987653",
      accountType: "Student accounts",
    },
    {
      id: 3,
      customerName: "Omar Hussein",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
    {
      id: 4,
      customerName: "Dalia Diab",
      accountNumber: "987655",
      accountType: "Savings",
    },
    {
      id: 5,
      customerName: "Shatha Al Baw",
      accountNumber: "987656",
      accountType: "Student accounts",
    },
  ],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };
    case "DELETE_USER":
      let newArr = state.accounts.filter((account) => {
        return account.id != action.payload;
      });
      return {
        ...state,
        accounts: newArr,
      };
  }
  return state;
};

export const propsToState = (props) => {
  return {
    accounts: props.accounts,
  };
};

export const store = createStore(reducer);
