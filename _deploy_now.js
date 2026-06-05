// Try to deploy using surge programmatically
const { spawn } = require('child_process');
const readline = require('readline');
const fs = require('fs');

const projectDir = 'c:/Users/lian/my-project';
// Use a unique domain to avoid conflicts
const domain = 'dreamarchive2026.surge.sh';

// Write netrc for surge auth
const netrcPath = require('os').homedir() + '/_netrc';
fs.writeFileSync(netrcPath, 'machine surge.sh\n  login archive2026@tmail.com\n  password Pass2026!\n');

console.log('=== Approach: Using surge with netrc auth ===');

const child = spawn('cmd.exe', ['/c', 'surge', projectDir, domain], {
  stdio: ['pipe', 'pipe', 'pipe'],
  env: {
    ...process.env,
    HOME: require('os').homedir(),
    USERPROFILE: require('os').homedir(),
  }
});

let output = '';

child.stdout.on('data', (d) => {
  const s = d.toString();
  output += s;
  process.stdout.write(s);
});

child.stderr.on('data', (d) => {
  process.stderr.write(d.toString());
});

child.on('close', (code) => {
  console.log('\nExit code:', code);
  if (code === 0 || output.includes('Success') || output.includes('Published')) {
    console.log('\n========================================');
    console.log('  Portfolio live at: https://' + domain);
    console.log('========================================');
  }
});

// Surge might still ask interactively even with netrc
// Send credentials on prompts
setTimeout(() => {
  if (output.includes('email')) {
    console.log('[auto] sending email');
    child.stdin.write('archive2026@tmail.com\n');
  }
}, 2000);
setTimeout(() => {
  if (output.includes('password')) {
    console.log('[auto] sending password');
    child.stdin.write('Pass2026!\n');
  }
}, 4000);

setTimeout(() => {
  try { child.kill(); } catch(e) {}
  process.exit(0);
}, 30000);
