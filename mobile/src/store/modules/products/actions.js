export function fetchDataRequest() {
  return {
    type: '@products/FETCH_DATA_REQUEST',
  };
}

export function fetchDataSuccess(payload) {
  return {
    type: '@products/FETCH_DATA_SUCCESS',
    payload,
  };
}

export function fetchDataFailed(payload) {
  return {
    type: '@products/FETCH_DATA_FAILED',
    payload,
  };
}

export function fetchItemRequest(id) {
  return {
    type: '@products/FETCH_ITEM_REQUEST',
    id
  };
}

export function fetchItemSuccess(payload) {
  return {
    type: '@products/FETCH_ITEM_SUCCESS',
    payload,
  };
}

