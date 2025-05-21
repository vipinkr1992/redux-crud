// redux/userSaga.js
import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from '../../api/api';
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUserRequest,
  addUserSuccess,
  addUserFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
} from './user.slice';

// Worker Sagas
function* fetchUsersSaga() {
  try {
    const response = yield call(axios.get, '/users');
    yield put(fetchUsersSuccess(response.data));
  } catch (error) {
    yield put(fetchUsersFailure(error.message));
  }
}

function* addUserSaga(action) {
  try {
    const response = yield call(axios.post, '/users', action.payload);
    yield put(addUserSuccess(response.data));
  } catch (error) {
    yield put(addUserFailure(error.message));
  }
}

function* updateUserSaga(action) {
  try {
    const response = yield call(
      axios.put,
      `/users/${action.payload.id}`,
      action.payload
    );
    yield put(updateUserSuccess(response.data));
  } catch (error) {
    yield put(updateUserFailure(error.message));
  }
}

function* deleteUserSaga(action) {
  try {
    yield call(axios.delete, `/users/${action.payload}`);
    yield put(deleteUserSuccess(action.payload));
  } catch (error) {
    yield put(deleteUserFailure(error.message));
  }
}

// Watcher Saga
export default function* userSaga() {
  yield all([
    takeLatest(fetchUsersRequest.type, fetchUsersSaga),
    takeLatest(addUserRequest.type, addUserSaga),
    takeLatest(updateUserRequest.type, updateUserSaga),
    takeLatest(deleteUserRequest.type, deleteUserSaga),
  ]);
}
