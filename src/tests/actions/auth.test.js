import { login, logout } from "../../actions/auth";

test('should generate login action object', () => {
  const action = login('124');
  const uid = '124';
  expect(action).toEqual({
    type: 'LOGIN',
    uid: uid
  });
});

test('should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT'
  });
});