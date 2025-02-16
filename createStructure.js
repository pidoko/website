#!/usr/bin/env node
// The above shebang line enables direct execution on Unix-like systems using Node.js.

const fs = require('fs').promises; // Use Node.js file system promises API for async operations.
const path = require('path');        // Import the path module for cross-platform path handling.

/**
 * Asynchronously creates a folder structure and initial page files for a Next.js project.
 * The structure is designed for a project named "my-portfolio".
 */
async function createStructure() {
  // Define the base directory for the project. This will be placed in the same directory as this script.
  const baseDir = path.join(__dirname, 'my-portfolio');

  // List of folders to be created within the project directory.
  // This includes folders for public assets, components, pages (including API routes), styles, libraries, and hooks.
  const folders = [
    'public',
    'src/components',
    'src/pages/api',
    'src/styles',
    'src/lib',
    'src/hooks'
  ];

  try {
    // Loop through each folder in the folders array to create it recursively.
    for (const folder of folders) {
      // Construct the full path for the current folder.
      const folderPath = path.join(baseDir, folder);
      // Create the folder (and parent directories if they don't exist) asynchronously.
      await fs.mkdir(folderPath, { recursive: true });
      // Log a message to the console confirming the folder's creation.
      console.log(`Created directory: ${folderPath}`);
    }

    // Define an array of page file names to create in the src/pages directory.
    const pages = ['_app.tsx', 'index.tsx', 'about.tsx', 'projects.tsx', 'contact.tsx'];
    // Process each page file.
    for (const page of pages) {
      // Construct the full file path for the page.
      const filePath = path.join(baseDir, 'src/pages', page);
      try {
        // Check if the file already exists.
        // If the file exists, fs.access will succeed and no file will be overwritten.
        await fs.access(filePath);
        console.log(`File already exists: ${filePath}`);
      } catch {
        // If the file does not exist, an error is thrown, so we catch it here.
        // Create the file with some placeholder content.
        await fs.writeFile(filePath, `// ${page} content\n`, 'utf8');
        console.log(`Created file: ${filePath}`);
      }
    }

    // Log a final success message after the project structure is fully created.
    console.log('Project structure created successfully.');
  } catch (error) {
    // If any error occurs during folder or file creation, log the error.
    console.error('Error creating project structure:', error);
    // Exit the process with a non-zero code to indicate failure.
    process.exit(1);
  }
}

// Call the createStructure function to start the process when the script runs.
createStructure();