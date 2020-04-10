export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * max + min);
}

export function getRandomString(requestedLength) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 -_';
  let result = '';

  for (let i = 0; i < requestedLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}
