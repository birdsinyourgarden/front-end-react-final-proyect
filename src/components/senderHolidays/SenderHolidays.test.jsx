import { render } from '@testing-library/react';
import SenderHolidays from './senderHolidays';

describe('sender holidays test', () => {
  it('the title is visible', () => {
    const { getByText } = render(<SenderHolidays />);
    expect(getByText(/Vacaciones/i)).toBeInTheDocument();
  });
  it('2 buttons exists', () => {
    const { getAllByRole } = render(<SenderHolidays />);
    expect(getAllByRole('button').length).toBe(2);
  });
});