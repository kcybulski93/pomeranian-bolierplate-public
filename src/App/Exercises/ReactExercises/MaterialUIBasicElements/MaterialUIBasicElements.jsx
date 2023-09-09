import { Button } from '@mui/material';
import './styles.css';

export const MaterialUIBasicElements = () => {
  return (
    <div>
      <Button variant="contained">Kliknij mnie</Button>
      <Button variant="text">Kliknij mnie</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
    </div>
  );
};
