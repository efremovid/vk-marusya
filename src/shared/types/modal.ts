export interface IModalInput {
  required?: boolean;
  placeholder: string;
  icon: string;
  type: string;
  isError?: boolean;
}

export interface IModalData {
  formFields: IModalInput[];
  formTitle?: string;
  buttonText: string;
  linkText: string;
  buttonAction: () => void;
  linkRef: string;
}