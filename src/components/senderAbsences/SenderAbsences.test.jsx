import { render } from '@testing-library/react';
import SenderAbsences from './senderAbsences';

describe('sender absences tests', () => {
  it('the title is visible', () => {
    expect(SenderAbsences).toBeTruthy();
    const { getByText } = render(<SenderAbsences />);
    expect(getByText(/Ausencias/i)).toBeInTheDocument();
  });
  it('2 buttons exists', () => {
    const { getAllByRole } = render(<SenderAbsences />);
    expect(getAllByRole('button').length).toBe(2);
  });
});
