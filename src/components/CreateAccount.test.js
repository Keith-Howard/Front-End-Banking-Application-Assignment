import { render, screen, aWait, fireEvent, getByLabelText, getByRole, getByTestId, getByText } from '@testing-library/react';
import CreateAccount from './CreateAccount';
import userEvent from '@testing-library/user-event';
import { act, Simulate } from 'react-dom/test-utils';

describe('Create Account render Page', () => {
  it('renders Create Account page look for label', () => {
    const {getByText, getByLabelText} = render(<CreateAccount/>);
    getByText('Create Account');
    // render(<CreateAccount />);
    // expect(document.querySelector('.card-header').textContent).toBe('Create Account');
  });
  
  it('renders 3 input fields IDs exist', () => {
    render(<CreateAccount />);
    expect(document.getElementById("name"));
    expect(document.getElementById("name"));
    expect(document.getElementById("email"));
    expect(document.getElementById("password"));
  });

  it('renders a submit button', () => {
    const {getByText, getByLabelText} = render(<CreateAccount />);
    fireEvent.change(document.getElementById("name"), {target: {value: 'Keith'},});  
    fireEvent.change(document.getElementById("email"), {target: {value: 'gmail'},});    
    fireEvent.change(document.getElementById("password"), {target: {value: '1234567890'},});
    fireEvent.click(getByText('Create'));
    getByText("Success Keith's Account Created");
  });
 
});