function secondToTime(seconds) {
  return new Date(1000 * seconds).toISOString().substring(16, 11);
}
export { secondToTime };
