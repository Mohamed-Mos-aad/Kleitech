import { Client, Account, Databases } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('68405531003a4d76c2e5');

export const account = new Account(client);
export const databases = new Databases(client);