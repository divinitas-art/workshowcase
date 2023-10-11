import { useForm } from 'react-hook-form';
import { Button, Container, Paper, Typography } from '@mui/material';
import { DropdownLanguage } from './FormComponents/DropdownLanguage';
import { InputText } from './FormComponents/InputText';
import { Language } from './Language';
import { FormNewsletterData } from './FormNewsletterData';
import styled from '@emotion/styled';
import { ButtonContainer } from './FormComponents/ButtonContainer';

interface FormMainProps {
  onSubmit: (data: FormNewsletterData) => void;
}

const defaultValues: FormNewsletterData = {
  name: '',
  phone: '',
  email: '',
  language: Language.CZECH,
};

export const FormNewsletter = ({ onSubmit }: FormMainProps) => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitted },
  } = useForm<FormNewsletterData>({
    defaultValues: defaultValues,
  });

  return (
    <StyledPaper elevation={0}>
      <Typography variant="h4">Newsletter</Typography>
      <InputText name="name" control={control} label="Jméno" required />
      <InputText
        name="phone"
        control={control}
        label="Telefon"
        required
        pattern={{
          // International Phone Numbers
          value: /^[+]{0,1}(?:[0-9\-\(\)\/\.]\s?){6,15}[0-9]{1}$/,
          // Czech Phone Numbers
          // value: /(?:(?:\+|00)420)+\d{9}/i,
          message: 'Zadejte telefon ve formátu +420602123456 nebo 602123456',
        }}
      />
      <InputText
        name="email"
        control={control}
        label="E-mail"
        required
        pattern={{
          // as per https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression?page=2&tab=active#answer-14075810
          value:
            /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/i,
          message: 'Zadejte email ve správném formátu pavel.novak@email.cz',
        }}
      />
      <DropdownLanguage
        name="language"
        control={control}
        label="Hlavní jazyk"
        required
      />
      <ButtonContainer>
        <Button
          onClick={handleSubmit(onSubmit)}
          variant={'contained'}
          disabled={isSubmitted && !isValid}>
          Submit
        </Button>
      </ButtonContainer>
    </StyledPaper>
  );
};

const StyledPaper = styled(Paper)`
  display: grid;
  grid-row-gap: 24px;
  padding: 24px;
`;
