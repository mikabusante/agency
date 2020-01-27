/* eslint-disable eqeqeq */
import { Wrapper, Input } from './OnboardStyles';

const Pane = ({ currentStep, value, onChange, name, onClick, step, question }) => {
  if (currentStep != step) {
    return null;
  }

  return (
    <Wrapper>
      <p>{question}</p>

      <Input type="text" name={name} value={value} onChange={onChange} onClick={onClick} />
    </Wrapper>
  );
};

export default Pane;
