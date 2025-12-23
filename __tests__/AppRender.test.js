import { render, screen } from '@testing-library/react-native';
import Login from '../app/authentication/Login';

test('Login screen renders correctly', () => {
  render(<Login />);
  expect(screen.getByText('Welcome!')).toBeTruthy();
});