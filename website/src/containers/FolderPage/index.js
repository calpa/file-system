import { useLocation } from 'react-router-dom';

import { Grid } from '@mui/material';
import Navigation from '../../components/Navigation';
import FolderTable from '../../components/FolderTable';
import directory from '../../mock/directory';
import get from '../../utils/get';

const FolderPage = () => {
  const location = useLocation();
  const target = location.pathname.split('/folder')[1];
  console.log(target);
  console.log(get(directory, target));

  return (
    <Grid container item xs={12}>
      <Navigation name={directory.name} />
      <FolderTable items={directory.items} />
    </Grid>
  );
};

export default FolderPage;
