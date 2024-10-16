import { Client, Databases, Account, Storage } from "node-appwrite";

//mr Admin Client
const createAdminClient = async () => {
  const adminClient = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT)
    .setKey(process.env.NEXT_APPWRITE_KEY);

  return {
    get account() {
      return new Account(adminClient);
    },
    get databases() {
      return new Databases(adminClient);
    },
    get storage() {
      return new Storage(adminClient);
    },
  };
};

//mr Session Client
const createSeesionClient = async (session) => {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);
  if (session) {
    client.setSession(session);
  }
  return {
    get account() {
      return new Account(adminClient);
    },
    get databases() {
      return new Databases(adminClient);
    },
  };
};

export { createAdminClient, createSeesionClient };
