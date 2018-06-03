let initialState = {
  'dogUrl': '',
  'requestError': false
};

export default function dogApp(state=initialState, action: any) {
  switch(action.type) {
    case 'DOG_FETCH_REQUEST':
      return {...state, dogUrl: '', requestError: false};
    case 'DOG_FETCH_REQUEST_SUCCESS':
      return {...state, dogUrl: action.payload};
    case 'DOG_FETCH_REQUEST_ERROR':
      return {...state, requestError: true};
    default:
      return state
  }
}