export class Loader {
  constructor(private filePath: string) {}

  /**
   * Loads the file content from the specified path
   * @returns Promise<string> The file contents
   * @throws Error if file cannot be read
   */
  async loadFile(): Promise<string> {
    try {
      const fs = await import("fs/promises");
      const content = await fs.readFile(this.filePath, "utf-8");
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
      const fs = await import("fs/promises");
      await fs.access(this.filePath);
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
    const extension = this.filePath.split(".").pop()?.toLowerCase();
    return extension ? allowedExtensions.includes(extension) : false;
  }

  /**
   * Gets the file size in bytes
   * @returns Promise<number>
   * @throws Error if file cannot be accessed
   */
  async getFileSize(): Promise<number> {
    try {
      const fs = await import("fs/promises");
      const stats = await fs.stat(this.filePath);
      return stats.size;
    } catch (error) {
      throw new Error(
        `Failed to get file size for ${this.filePath}: ${error.message}`
      );
    }
  }

  // Add loader methods here
}
