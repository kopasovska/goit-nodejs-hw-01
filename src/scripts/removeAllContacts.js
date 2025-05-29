import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const data = await readContacts();
  data.length = 0;
  await writeContacts(data);
};

removeAllContacts();
