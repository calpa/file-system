import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

import humanFileSize from '../../utils/humanFileSize';
import formatDate from '../../utils/formatDate';

import NameCell from '../../components/Cell/NameCell';

export default function BasicTable(props) {
  const { items = [] } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Owner</TableCell>
            <TableCell>Last Modified</TableCell>
            <TableCell>File Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                <NameCell item={item} />
              </TableCell>
              <TableCell>{item.owner}</TableCell>
              <TableCell>
                {formatDate(item.lastModifiedDate)}, {item.lastModifiedBy}
              </TableCell>
              <TableCell>{humanFileSize(item.size)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
