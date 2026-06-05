const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Write credentials file that surge might read
const netrcPath = path.join(os.homedir(), '_netrc');
fs.writeFileSync(netrcPath, 'machine surge.sh login archive2026@tmail.com password Pass2026!\n');

// Try with SURGE_LOGIN and SURGE_TOKEN env
process.env.SURGE_LOGIN = 'archive2026@tmail.com';
process.env.SURGE_PASSWORD = 'Pass2026!';

// Spawn surge with full environment
const child = spawn('surge', ['.', 'dreamarchive2026.surge.sh'], {
  cwd: 'c:/Users/lian/my-project',
  stdio: ['pipe', 'pipe', 'pipe'],
  env: { ...process.env, CI: 'true', SURGE_LOGIN: 'archive2026@tmail.com', SURGE_PASSWORD: 'Pass2026!' }
});

child.stdout.on('data', (d) => { 
  const s = d.toString();
  process.stdout.write(s);
  if (s.includes('email')) child.stdin.write('archive2026@tmail.com\n');
  if (s.includes('password')) child.stdin.write('Pass2026!\n');
});

child.stderr.on('data', (d) => process.stderr.write(d));

setTimeout(() => {
  child.stdin.write('archive2026@tmail.com\n');
}, 2000);
setTimeout(() => {
  child.stdin.write('Pass2026!\n');
}, 4000);

setTimeout(() => {
  child.kill();
  process.exit(0);
}, 30000);
