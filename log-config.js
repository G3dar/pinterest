import { readFileSync } from 'fs';

console.log('\n========================================');
console.log('🔍 VITE CONFIG AT DEPLOYMENT TIME:');
console.log('========================================\n');

const configContent = readFileSync('./vite.config.js', 'utf-8');
console.log(configContent);

console.log('\n========================================');
console.log('✅ Config logged successfully');
console.log('========================================\n');
