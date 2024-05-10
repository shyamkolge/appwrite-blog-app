import { ID, Client, Databases, Storage, Query } from "appwrite";
import conf from "../confi/conf";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwritePorjectId);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, body, userId, status, featuredImage }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          userId,
          title,
          body,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite :: config :: createPost :: error :: ", error);
    }
  }

  async updatePost(slug, { title, body, status, featuredImage }) {
    try {
      return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          body,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite :: config :: updatePost :: error :: ", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite :: config :: deletePost :: error :: ", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
        // []
      );
    } catch (error) {
      console.log("Appwrite :: config :: getPost :: error :: ", error);
      return false;
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite :: config :: getAllPost :: error :: ", error);
      return false;
    }
  }

  // # File upload Service

  async uplaodFile(file) {
    try {
      return await this.storage.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite :: config :: uplaodFile :: error :: ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.storage.deleteFile(conf.appwriteBucketId, fileId);

      return true;
    } catch (error) {
      console.log("Appwrite :: config :: deleteFile :: error :: ", error);
      return false;
    }
  }

getFilePreview(fileId) {
    return this.storage.getFilePreview(conf.appwriteBucketId, fileId);
  }
}

const service = new Service();

export default service;
