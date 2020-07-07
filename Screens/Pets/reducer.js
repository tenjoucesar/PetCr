import PETS from "../../data/dummy-data";

const initialState = {
  pets: PETS,
  adopted: PETS,
};

const petsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "gg":
      return state;

    default:
      return state;
  }
};

export default petsReducer;
