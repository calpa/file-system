import { Link } from 'react-router-dom';

const NameCell = (props) => {
  const { item } = props;
  if (item.type === 'dir') {
    return <Link to={`/folder/${item.name}`}>{item.name}</Link>;
  }
  return item.name;
};

export default NameCell;
