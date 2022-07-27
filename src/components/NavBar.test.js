import { render, screen } from '@testing-library/react';
import * as ReactDOM from 'react-dom';
import Main from '../layout/Main';
import userEvent from '@testing-library/user-event';
import {getQueriesForElement} from '@testing-library/dom';


it('NavBar.Test.js labels', () => {
  const {getByText, getByLabelText} = render(<Main/>);
  expect(getByText('Create Account')).not.toBeNull();
  // this is the best way for testing the functionality like how the end user will see the functions
  // the next line causes a memory leak in the testing library
  getByText('Create Account');  // since this is a boolean and we are testing does it exist
})

it('NavBar.Test.js labels', () => {
  render(<Main />);
  const linkElement = screen.getByText(/Create Account/);
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByText(/BadBank/)).toBeInTheDocument();
  expect(screen.getByText(/Login/)).toBeInTheDocument();
  expect(screen.getByText(/Deposit/)).toBeInTheDocument();
  expect(screen.getByText(/Withdraw/)).toBeInTheDocument();
  expect(screen.getByText(/All Data/)).toBeInTheDocument();
});

it('NavBar.Test.js labels', () => {
   render(<Main />);
   const linkElement = screen.getByText(/Create Account/);
   expect(linkElement).toBeInTheDocument();
   expect(screen.getByText(/BadBank/)).toBeInTheDocument();
   expect(screen.getByText(/Login/)).toBeInTheDocument();
   expect(screen.getByText(/Deposit/)).toBeInTheDocument();
   expect(screen.getByText(/Withdraw/)).toBeInTheDocument();
   expect(screen.getByText(/All Data/)).toBeInTheDocument();
});

it('NavBar.Test.js Anchor tag', () => {
  render(<Main />);
  expect(screen.getByText(/BadBank/).closest('a')).toHaveAttribute('href', '#/')
  expect(screen.getByText(/Create Account/).closest('a')).toHaveAttribute('href', '#/components/CreateAccount')
  expect(screen.getByText(/Login/).closest('a')).toHaveAttribute('href', '#/components/Login')
  expect(screen.getByText(/Deposit/).closest('a')).toHaveAttribute('href', '#/components/Deposit')
  expect(screen.getByText(/Withdraw/).closest('a')).toHaveAttribute('href', '#/components/Withdraw')
  expect(screen.getByText(/All Data/).closest('a')).toHaveAttribute('href', '#/components/AllData')
})
