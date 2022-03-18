// https://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable-string

function humanFileSize(size) {
  if (size <= 0) {
    return 0;
  }

  const i = Math.floor(Math.log(size) / Math.log(1024));
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  );
}

export default humanFileSize;
