const get = (object, path, defaultValue) => {
  const _path = Array.isArray(path) ? path : path.split('.');
  if (object && _path.length)
    return get(object[_path.shift()], _path, defaultValue);
  return object === undefined ? defaultValue : object;
};

export default get;
