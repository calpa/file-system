import { Grid, Typography } from '@mui/material';

const Navigation = (props) => {
  const { name } = props;

  return (
    <Grid>
      <Typography>{name}</Typography>
    </Grid>
  );
};

export default Navigation;
