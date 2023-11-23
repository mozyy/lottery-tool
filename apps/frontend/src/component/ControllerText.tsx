import { TextField, TextFieldProps } from '@mui/material';
import {
  Controller, ControllerProps, FieldPath, FieldValues,
} from 'react-hook-form';

export type ControllerTextProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
  render?: ControllerProps<TFieldValues, TName>['render'],
  label?: TextFieldProps['label'],
  fieldProps?: TextFieldProps
};

export default function ControllerText<
TFieldValues extends FieldValues = FieldValues,
TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: ControllerTextProps<TFieldValues, TName>) {
  const { label, fieldProps, ...rest } = props;
  return (
    <Controller
      render={({ field, fieldState: { error, invalid } }) => (
        <TextField
          label={label || field.name}
          error={invalid}
          helperText={error?.message}
          required={!!rest.rules?.required}
          {...field}
          {...fieldProps}
        />
      )}
      {...rest}
    />
  );
}
