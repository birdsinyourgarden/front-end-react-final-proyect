import { render } from '@testing-library/react';
import LocalCalendar from './Calendar';

describe('LocalCalendar', () => {
  it('starts the week on Monday', () => {
    const { getByText } = render(<LocalCalendar />);
    expect(getByText("Lu"));
  });
});
