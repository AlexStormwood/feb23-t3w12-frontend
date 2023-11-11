import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import {login} from './functions/login';

test('renders login form', () => {
  render(<App />);
  // const usernameLabel = screen.getByText("Username:");
  const usernameLabel = screen.getByTestId("bananas");
  expect(usernameLabel).toBeInTheDocument();

  const passwordLabel = screen.getByText("Password:");
  expect(passwordLabel).toBeInTheDocument();

  const loginButton = screen.getByText("Log In");
  expect(loginButton).toBeInTheDocument();
});


test("can click on login", () => { 
  render(<App />);

  const loginButton = screen.getByText("Log In");

  let result = fireEvent(
    loginButton,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }),
  );

  /*
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Click Me</Button>)
  fireEvent.click(screen.getByText(/click me/i))
  expect(handleClick).toHaveBeenCalledTimes(1)
  */

  console.log(result);

  expect(result).toBe(true);


})

test("login function gets jwt", async () => {
  // mock fetch to make this work
  // the mocked fetch must return {jwt:"some truthy value"}
  // variety of ways to mock fetches! 
  
  let result = await login("admin3", "Password1");

  // result on success is an object
  // with a "jwt" property 

  expect(result.jwt).toBeTruthy();

})
