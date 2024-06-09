const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

const KEYDATA_PATH = ".keydata.yaml";

async function main() {
  const rl = require('readline/promises').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  if (fs.existsSync(KEYDATA_PATH)) {
    const answer = await rl.question(`${KEYDATA_PATH} already exists. Do you want to override it? (y/n) `);
    if (answer.toLowerCase() === 'y') {
      fs.promises.writeFile(KEYDATA_PATH, '')
    } else {
      console.log("Operation aborted.");
      rl.close();
      return;
    }
  }

  rl.close();
  const iv = crypto.getRandomValues(new Uint8Array(12));
  fs.promises.appendFile(
    KEYDATA_PATH,
    `init_vector: "${iv}"\nkeys:\n`)
    .then(console.log("Initialisation vector saved."))
    .catch(console.error);

  for (const file of fs.readdirSync(path.join(__dirname, 'blog'))) {
    let readData = await fs.promises.readFile(path.join(__dirname, 'blog', file)).catch(console.error)

    const key = await crypto.subtle.generateKey(
      {
        name: "AES-GCM",
        length: 256,
      },
      true,
      ["encrypt", "decrypt"]
    );

    crypto.subtle.exportKey("jwk", key).then(
      (keydata) => fs.promises.appendFile(
        KEYDATA_PATH,
        `  - ${file}: "${keydata.k}"\n`)
        .then(console.log(`keydata for ${file} saved.`))
        .catch(console.error)
    )

    let encrypted = await crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: iv
      },
      key,
      readData.buffer
    ).catch(console.error)

    const staticFolder = path.join(__dirname, 'static');
    await fs.promises.mkdir(staticFolder, { recursive: true });
    fs.promises.writeFile(`${staticFolder}/${file}.encrypted`, Buffer.from(encrypted))
      .then(console.log(`${file} saved.`))
  }
}

main();
