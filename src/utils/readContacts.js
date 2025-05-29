import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
    try {
        const buffer = await fs.readFile(PATH_DB, 'utf8');
        return JSON.parse(buffer);
    } catch (error) {
        console.log(error);
    }
};
