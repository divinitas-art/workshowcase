import './App.css';
import { useState } from 'react';
import { FormNewsletter } from './Form/FormNewsletter';
import { FormNewsletterData } from './Form/FormNewsletterData';
import { Button, Container, ThemeProvider } from '@mui/material';
import { SuccessList } from './SuccessList';
import { ButtonContainer } from './Form/FormComponents/ButtonContainer';
import { theme } from './theme';

function App() {
  const [formMainData, setFormMainData] = useState<FormNewsletterData | null>(
    null,
  );
  const handleSubmit = (data: FormNewsletterData) => {
    setFormMainData(data);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        {formMainData !== null ? (
          <>
            <SuccessList data={formMainData} />
            <ButtonContainer>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setFormMainData(null)}>
                Zpět
              </Button>
            </ButtonContainer>
          </>
        ) : (
          <FormNewsletter onSubmit={handleSubmit} />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
