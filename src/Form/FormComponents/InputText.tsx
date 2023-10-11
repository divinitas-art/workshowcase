import { Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FormInputProps } from './FormInputProps';

export const InputText = ({
  name,
  control,
  label,
  required = false,
  pattern,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required ? 'Toto pole je povinné' : false,
        pattern: pattern,          
      }}
      render={({
        field: { onChange, value, disabled },
        fieldState: { error },
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          required={required}
          disabled={disabled}
        />
      )}
    />
  );
};
