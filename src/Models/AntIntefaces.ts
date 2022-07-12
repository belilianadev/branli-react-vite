export interface FieldData {
  name: string;
  value?: any;
  touched?: boolean;
  validating?: boolean;
  errors?: string[];
}

export interface ItemMenuNav {
  key: string;
  label: string | JSX.Element;
  icon: JSX.Element;
}
