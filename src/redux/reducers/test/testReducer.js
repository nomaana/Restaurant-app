isState = {
  test: 'demo',
};
const testReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_TEST': {
      return {...state, test: action.test};
    }
  }
  return state;
};
export default testReducer;
