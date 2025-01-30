# evm-compat-check

`evm-compat-check` is a utility tool designed to help developers ensure their smart contracts and related files are compatible with the Ethereum Virtual Machine (EVM). By providing robust file handling and validation features, this tool simplifies the process of verifying file integrity, structure, and compatibility, making it easier to develop reliable and secure Ethereum-based applications.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
  - [Loader Class](#loader-class)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Features

- **File Loading**: Asynchronously load file contents.
- **File Existence Check**: Verify if a file exists at a specified path.
- **File Extension Validation**: Ensure files have allowed extensions.
- **File Size Retrieval**: Get the size of a file in bytes.
- **Modification Time Retrieval**: Fetch the last modification time of a file.
- **Backup Creation**: Create timestamped backups of files.
- **Path Utilities**: Extract directory paths and filenames.
- **EVM Compatibility Checks**: Validate smart contract compatibility with EVM (to be implemented).

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/evm-compat-check.git
   cd evm-compat-check
   ```

2. **Install Dependencies**

   Ensure you have [Node.js](https://nodejs.org/) installed. Then, install the necessary packages:

   ```bash
   npm install
   ```

3. **Install TypeScript and Node.js Types**

   ```bash
   npm install --save-dev typescript @types/node
   ```

4. **Build the Project**

   ```bash
   npx tsc
   ```

## Usage

1. **Import the Loader Class**

   ```typescript
   import { Loader } from "./src/loader";
   ```

2. **Create an Instance of Loader**

   ```typescript
   const loader = new Loader("path/to/your/file.sol");
   ```

3. **Utilize Loader Methods**

   ```typescript
   async function processFile() {
     if (await loader.fileExists()) {
       if (loader.validateFileExtension(["sol"])) {
         const content = await loader.loadFile();
         console.log("File Content:", content);
         const size = await loader.getFileSize();
         console.log("File Size:", size, "bytes");

         const lastModified = await loader.getLastModified();
         console.log("Last Modified:", lastModified);

         const backupPath = await loader.createBackup();
         console.log("Backup Created At:", backupPath);

         const directory = loader.getDirectory();
         console.log("Directory:", directory);

         const fileName = loader.getFileName();
         console.log("Filename:", fileName);
       } else {
         console.log("Invalid file extension.");
       }
     } else {
       console.log("File does not exist.");
     }
   }

   processFile().catch(console.error);
   ```

## API Reference

### Loader Class

The `Loader` class provides methods for handling file operations essential for verifying EVM compatibility.

#### Constructor

```typescript
constructor(filePath: string)
```

- **Parameters**
  - `filePath`: The path to the file to be managed.

#### Methods

- **loadFile**

  ```typescript
  async loadFile(): Promise<string>
  ```

  Asynchronously loads and returns the content of the specified file.

- **fileExists**

  ```typescript
  async fileExists(): Promise<boolean>
  ```

  Checks if the specified file exists.

- **validateFileExtension**

  ```typescript
  validateFileExtension(allowedExtensions: string[]): boolean
  ```

  Validates whether the file has one of the allowed extensions.

- **getFileSize**

  ```typescript
  async getFileSize(): Promise<number>
  ```

  Retrieves the size of the file in bytes.

- **getLastModified**

  ```typescript
  async getLastModified(): Promise<Date>
  ```

  Gets the last modification time of the file.

- **createBackup**

  ```typescript
  async createBackup(): Promise<string>
  ```

  Creates a timestamped backup of the file and returns the backup file path.

- **getDirectory**

  ```typescript
  getDirectory(): string
  ```

  Retrieves the directory path of the file.

- **getFileName**

  ```typescript
  getFileName(): string
  ```

  Retrieves the filename without the path.

## Configuration

Ensure your `tsconfig.json` is properly configured to include Node.js types and resolve modules correctly.

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "types": ["node"],
    "moduleResolution": "node",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"]
}
```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a New Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "feat: add your feature"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Open a Pull Request**

   Explain the changes and the reasons behind them.

## License

This project is licensed under the [MIT License](LICENSE).
