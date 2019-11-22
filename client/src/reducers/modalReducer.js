import { MODAL_OPEN, MODAL_CLOSE } from "../actions/types";

const initialState = {
  modal: false,
  modalProduct: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case MODAL_OPEN:
      return {
        ...state,
        modal: true,
        modalProduct: payload
      };
    case MODAL_CLOSE:
      return {
        ...state,
        modal: false,
        modalProduct: ""
      };
    default:
      return state;
  }
}
