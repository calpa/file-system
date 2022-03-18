import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navigation = (props) => {
  const { name } = props;

  return (
    <Grid>
      <nav>
        <Link to={`${name}`}>{name}</Link>
      </nav>
      {/* <Typography>{name}</Typography> */}
    </Grid>
  );
};

export default Navigation;
