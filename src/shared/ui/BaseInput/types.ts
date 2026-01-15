import type { ChangeEvent, FocusEvent } from 'react';

export interface BaseInputProps {
  name?: string | undefined;
  label?: string | undefined;
  icon?: string
  value?: string | undefined;
  defaultValue?: string | number | undefined;
  placeholder?: string | undefined;
  className?: string | string[] | undefined;
  isDisabled?: boolean | undefined;
  isError?: boolean | undefined;
  defaultErrorValue?: string;
  type?: string | undefined;
  required?: boolean | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}
