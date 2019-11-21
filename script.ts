import { Photon } from '@generated/photon';

const photon = new Photon();

// A `main` function so that we can use async/await
async function main() {
  const test = await photon.users.update({
    where: {
      email: 'nonexistant',
    },
    data: {
      name: 'Harshit',
      email: 'test',
    },
  });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
