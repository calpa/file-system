const NameCell = (props) => {
  const { item } = props;
  if (item.type === 'dir') {
    return <a href={`/${item.name}`}>{item.name}</a>;
  }
  return item.name;
};

export default NameCell;
