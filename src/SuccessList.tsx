import { List, ListItem, ListItemText } from '@mui/material';
import { FormNewsletterData } from './Form/FormNewsletterData';
import { getLanguageLabel } from './Form/Language';

interface SuccessListProps {
  data: FormNewsletterData;
}

export const SuccessList = ({ data }: SuccessListProps) => {
  return (
    <>
      <h1>Úspěšně přihlášen</h1>
      <List>
        <ListItem disablePadding>
          <ListItemText primary={'Jméno'} secondary={data.name} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={'Telefon'} secondary={data.phone} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText primary={'E-mail'} secondary={data.email} />
        </ListItem>
        <ListItem disablePadding>
          <ListItemText
            primary={'Jazyk'}
            secondary={getLanguageLabel(data.language)}
          />
        </ListItem>
      </List>
    </>
  );
};
