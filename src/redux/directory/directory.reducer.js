import SECTIONS from '../../data/sections.data';

const INITIAL_STATE = {sections: SECTIONS};

const directoryReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default directoryReducer;