import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller } from 'react-hook-form';
import { FormInputProps } from './FormInputProps';
import { languageOptions } from '../Language';

export const DropdownLanguage: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  required = false,
  pattern,
}) => {
  const generateSingleOptions = () => {
    return [
      <MenuItem key={'none'}>Vyberte hodnotu</MenuItem>,
      ...languageOptions.map((option: any) => {
        return (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        );
      }),
    ];
  };
  return (
    <FormControl size={'small'}>
      <InputLabel>{label}</InputLabel>
      <Controller
        rules={{ required, pattern }}
        render={({
          field: { onChange, value, disabled },
          fieldState: { error },
        }) => (
          <Select
            label={label}
            onChange={onChange}
            value={value}
            required={required}
            disabled={disabled}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};
