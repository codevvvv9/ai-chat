import { getDatabaseExample } from '../store/database-example.js';

async function main() {
  const result = await getDatabaseExample();

  console.log('database check ok');
  console.log(`database: ${result.database}`);
  console.log(`version: ${result.version}`);
}

main().catch((error) => {
  console.error('database check failed');
  console.error(error);
  process.exitCode = 1;
});
