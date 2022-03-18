import { Grid } from '@mui/material';
import Navigation from '../../components/Navigation';
import FolderTable from '../../components/FolderTable';
import directory from '../../mock/directory';

const FolderPage = () => {
  return (
    <Grid container item xs={12}>
      <Navigation name={directory.name} />
      <FolderTable items={directory.items} />
    </Grid>
  );
};

export default FolderPage;
