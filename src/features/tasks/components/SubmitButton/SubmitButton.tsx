import SubmitButtonStyled from "./SubmitButtonStyled";

interface SubmitButtonProps {
  text: string;
}

const SubmitButton = ({ text }: SubmitButtonProps): JSX.Element => {
  return <SubmitButtonStyled />;
};

export default SubmitButton;
