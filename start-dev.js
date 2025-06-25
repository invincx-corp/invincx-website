#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting development server with automatic compilation...');
console.log('📝 Any changes to your files will automatically trigger recompilation and hot reload');
console.log('🌐 Server will be available at: http://localhost:3000');
console.log('');

// Start the Vite development server
const viteProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true,
  cwd: process.cwd()
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping development server...');
  viteProcess.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Stopping development server...');
  viteProcess.kill('SIGTERM');
  process.exit(0);
});

viteProcess.on('close', (code) => {
  console.log(`\n❌ Development server stopped with code ${code}`);
  process.exit(code);
}); 