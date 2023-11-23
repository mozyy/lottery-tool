import {
  Checkbox, CheckboxProps, FormControl, FormControlLabel, FormControlLabelProps, FormHelperText,
} from '@mui/material';
import {
  Controller, ControllerProps, FieldPath, FieldValues,
} from 'react-hook-form';

export type ControllerTextProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
  render?: ControllerProps<TFieldValues, TName>['render'],
  label?: FormControlLabelProps['label'],
  fieldProps?: Partial<FormControlLabelProps>
  checkboxProps?: CheckboxProps
};

export default function ControllerCheckbox<
TFieldValues extends FieldValues = FieldValues,
TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: ControllerTextProps<TFieldValues, TName>) {
  const {
    label, fieldProps, checkboxProps, ...rest
  } = props;
  return (
    <Controller
      render={({ field, fieldState: { error, invalid } }) => (
        <FormControl
          error={invalid}
          required={!!rest.rules?.required}
        >
          <FormControlLabel
            label={label || field.name}
            control={<Checkbox checked={field.value} {...field} {...checkboxProps} />}
            {...field}
            {...fieldProps}
          />
          <FormHelperText>{error?.message}</FormHelperText>
        </FormControl>
      )}
      {...rest}
    />
  );
}
