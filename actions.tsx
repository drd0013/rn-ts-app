export function fetchDogUrl() {
  return {
    type: "DOG_FETCH_REQUEST"
  };
}

export function fetchAvailableBreeds() {
  return {
    type: "BREED_FETCH_REQUEST"
  };
}
