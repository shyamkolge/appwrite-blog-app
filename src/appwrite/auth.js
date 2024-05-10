import conf from "../confi/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setEndpoint(conf.appwritePorjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        name,
        email,
        password
      );

      if (userAccount) {
        // If account created successfully then login that user by calling a method
        return this.login({ email, password });
        // return userAccount;
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite :: register :: error ", err);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Appwrite :: login :: error ", err);
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      console.log("Appwrite :: getCurrentUser :: error ", err);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSession();
    } catch (error) {
      console.log("Appwrite :: logout :: error ", err);
    }
  }
  
}

const authService = new AuthService();

export default authService;
