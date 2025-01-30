import { promises as fs } from "fs";
import * as path from "path";

export class Loader {
  private readonly absolutePath: string;

  constructor(private filePath: string) {
    this.absolutePath = path.resolve(filePath);
  }

  /**
   * Loads the file content from the specified path
   * @returns Promise<string> The file contents
   * @throws Error if file cannot be read
   */
  async loadFile(): Promise<string> {
    try {
      const content = await fs.readFile(this.absolutePath, "utf-8");
      return content;
    } catch (error) {
      throw new Error(`Failed to load file ${this.filePath}: ${error.message}`);
    }
  }

  /**
   * Checks if the file exists
   * @returns Promise<boolean>
   */
  async fileExists(): Promise<boolean> {
    try {
      await fs.access(this.absolutePath);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * Validates the file extension
   * @param allowedExtensions Array of allowed file extensions
   * @returns boolean
   */
  validateFileExtension(allowedExtensions: string[]): boolean {
    const extension = path.extname(this.filePath).toLowerCase().slice(1);
    return allowedExtensions.includes(extension);
  }

  /**
   * Gets the file size in bytes
   * @returns Promise<number>
   * @throws Error if file cannot be accessed
   */
  async getFileSize(): Promise<number> {
    try {
      const stats = await fs.stat(this.absolutePath);
      return stats.size;
    } catch (error) {
      throw new Error(
        `Failed to get file size for ${this.filePath}: ${error.message}`
      );
    }
  }

  /**
   * Gets the file's last modification time
   * @returns Promise<Date>
   */
  async getLastModified(): Promise<Date> {
    try {
      const stats = await fs.stat(this.absolutePath);
      return stats.mtime;
    } catch (error) {
      throw new Error(
        `Failed to get last modified time for ${this.filePath}: ${error.message}`
      );
    }
  }

  /**
   * Creates a backup of the file with a timestamp
   * @returns Promise<string> Path to the backup file
   */
  async createBackup(): Promise<string> {
    try {
      const timestamp = new Date().toISOString().replace(/[:]/g, "-");
      const backupPath = `${this.absolutePath}.${timestamp}.backup`;
      await fs.copyFile(this.absolutePath, backupPath);
      return backupPath;
    } catch (error) {
      throw new Error(
        `Failed to create backup for ${this.filePath}: ${error.message}`
      );
    }
  }

  /**
   * Gets the directory path of the file
   * @returns string
   */
  getDirectory(): string {
    return path.dirname(this.absolutePath);
  }

  /**
   * Gets the filename without the path
   * @returns string
   */
  getFileName(): string {
    return path.basename(this.filePath);
  }

  // Add loader methods here
}
