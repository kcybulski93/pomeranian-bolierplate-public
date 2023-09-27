export function Timer({ time }) {
  let s = Math.floor((time % 3600) % 60);
  let m = Math.floor((time % 3600) / 60);

  if (time % 60 === 0) {
    return m + ':00';
  }
  if (s < 10) {
    return m + ':0' + s;
  }

  return m + ':' + s;
}
