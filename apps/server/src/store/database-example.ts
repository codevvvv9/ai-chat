import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { env } from '../config/env.js';

const execFileAsync = promisify(execFile);
const currentDir = dirname(fileURLToPath(import.meta.url));
const serverRootDir = resolve(currentDir, '../..');

export async function getDatabaseExample() {
  const { stdout } = await execFileAsync(
    'docker',
    [
      'compose',
      '--env-file',
      '.env',
      '-f',
      'docker-dev-compose.yml',
      'exec',
      '-T',
      'mysql',
      'mysql',
      `-u${env.mysql.user}`,
      `-p${env.mysql.password}`,
      '-D',
      env.mysql.database,
      '-N',
      '-B',
      '-e',
      'SELECT DATABASE(), VERSION()'
    ],
    { cwd: serverRootDir }
  );

  const [line] = stdout.trim().split('\n');

  if (!line) {
    throw new Error('Database example query returned no rows');
  }

  const [database = '', version = ''] = line.split('\t');

  return {
    status: 'ok' as const,
    database,
    version
  };
}
