async function sha256Hash(input) {
  const encoder = new TextEncoder();
  const data = encoder.encode(input);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

const inputString = 'Hello, World!';
sha256Hash(inputString)
  .then(hash => console.log(`SHA-256 Hash: ${hash}`))
  .catch(error => console.error(`Error: ${error.message}`));
