import styled from 'styled-components';
import { useState, useReducer } from 'react';
import uniqid from 'uniqid';
import Pane from './Pane';

const initialState = {
  displayName: '',
  handle: '',
  pronouns: '',
  link: [],
  location: '',
  guidelines: '',
};

const reducer = (state, { field, value }) => ({
  ...state,
  [field]: value,
});

const Onboard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [state, dispatch] = useReducer(reducer, initialState);

  const onClick = e => {
    dispatch({ field: e.target.name, value: '' });
  };

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const _next = () => {
    let current = currentStep;
    // If the current step is 1 or 2, then add one on "next" button click
    current = current >= 5 ? 6 : current + 1;

    setCurrentStep(current);
  };

  const _prev = () => {
    let current = currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    current = current <= 1 ? 1 : current - 1;
    setCurrentStep(current);
  };

  const previousButton = () =>
    currentStep !== 1 ? (
      <button type="button" onClick={_prev}>
        Previous
      </button>
    ) : null;

  const nextButton = () =>
    currentStep < 6 ? (
      <button type="button" onClick={_next}>
        Next
      </button>
    ) : null;

  const questions = [
    {
      question: 'What is your name?',
      name: 'displayName',
    },
    {
      question: 'What is your handle?',
      name: 'handle',
    },
    {
      question: 'What are your pronouns?',
      name: 'pronouns',
    },
    {
      question: 'Any links to share?',
      name: 'links',
    },
    {
      question: 'Whats your location?',
      name: 'location',
    },
    {
      question: 'List any guidelines you have for commissions.',
      name: 'guidelines',
    },
  ];

  return (
    <Wrapper>
      <Box>
        <h4>Step {currentStep}</h4>
        {questions.map(item => {
          const step = questions.indexOf(item) + 1;
          const { name, question } = item;

          return (
            <Pane
              key={uniqid()}
              currentStep={currentStep}
              step={step}
              name={name}
              value={state.name}
              question={question}
              onChange={onChange}
              onClick={onClick}
            />
          );
        })}

        {previousButton()}
        {nextButton()}
      </Box>
    </Wrapper>
  );
};

export default Onboard;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Box = styled.div`
  width: 40vw;
  height: 60vh;
  box-shadow: ${props => props.theme.fg} 10px 8px;
  border: 3px solid ${props => props.theme.fg};
  padding: 10% 6%;
  min-height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 24px;
  }
`;
