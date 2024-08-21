import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import BookingForm from './components/BookingForm'
//import Header from './components/Header'

test('renders the header', () => {
  render(<BrowserRouter><App/></BrowserRouter>);
  const headerElement = screen.getByText("This week's specials!");
  expect(headerElement).toBeInTheDocument();

  const bookingButton = screen.getByRole("button");
  fireEvent.click(bookingButton);

  const bookingPage = screen.getByText("Choose Date");
  expect(bookingPage).toBeInTheDocument();
});
