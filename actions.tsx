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

export function setSelectedBreed(newBreed: string) {
  return {
    type: "SET_SELECTED_BREED",
    payload: newBreed
  }
}
