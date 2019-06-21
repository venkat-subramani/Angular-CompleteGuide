import { User } from './user.model';

describe('UserModel', () => {
  it('create an instance', () => {
    const user = new User('email', 'registered');
    expect(user).toBeTruthy();
  });
});
