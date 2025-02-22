#!/usr/bin/env node

const fs = require('fs').promises
const path = require('path');

async function createStructure1() {
    const baseDir = path.join(__dirname, 'portfolio');

    const folders = [
        'public',
        'src/components',
        'src/pages/api',
        'src/styles',
        'src/lib',
        'src/hooks'
    ];

    try {
        for (const folder of folders) {
            const folderPath = path.join(baseDir, folder);
            await fs.mkdir(folderPath, { recursive: true });
            console.log(`Created directory: ${folderPath}`);
        }


    } catch (error) {
        console.error('Error creating project structure:', error);
        process.exit(1);
    }
}