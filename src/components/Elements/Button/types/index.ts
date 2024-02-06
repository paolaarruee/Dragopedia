type ButtonType = "button" | "submit" | "reset" | undefined;

export interface ButtonProps {
  type: ButtonType;
  label?: string;
  children?: JSX.Element;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}
