import types from '../actions/types/color';

const initialState = {
  color: [255, 255, 255]
};

export default function ui(state = initialState, action) {
  switch (action.type) {
    case types.RANDOMIZE_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
}