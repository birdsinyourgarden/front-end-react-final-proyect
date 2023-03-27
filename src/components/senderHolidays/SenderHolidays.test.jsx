import { render } from '@testing-library/react';
import SenderHolidays from './senderHolidays';

describe('sender holidays test', () => {
  it('the title is visible', () => {
    const { getByText } = render(<SenderHolidays />);
    expect(getByText(/Vacaciones/i)).toBeInTheDocument();
  });
});