import { Wrapper, Input } from './OnboardStyles';

const Pane2 = ({ currentStep, value, onChange, name, onClick }) => {
  if (currentStep !== 2) {
    return null;
  }

  return (
    <Wrapper>
      <p>What is your handle?</p>
      <Input type="text" name={name} value={value} onChange={onChange} onClick={onClick} />
    </Wrapper>
  );
};

export default Pane2;
