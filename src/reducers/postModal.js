export default function postModal(state = false, action) {
  switch (action.type) {
    case "OPEN_POST_MODAL":
      return action.bool;
    case "CLOSE_POST_MODAL":
      return action.bool;
    default:
      return state;
  }
}
