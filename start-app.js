const { spawn } = require('child_process');
const path = require('path');

console.log('🚀 Starting Zerodha Clone Application...\n');

// Function to start a service
function startService(name, command, cwd) {
  console.log(`📦 Starting ${name}...`);
  
  const child = spawn(command, [], {
    cwd: path.join(__dirname, cwd),
    stdio: 'pipe',
    shell: true
  });

  child.stdout.on('data', (data) => {
    console.log(`[${name}] ${data.toString().trim()}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`[${name} ERROR] ${data.toString().trim()}`);
  });

  child.on('error', (error) => {
    console.error(`❌ Failed to start ${name}:`, error.message);
  });

  child.on('close', (code) => {
    console.log(`🔴 ${name} stopped with code ${code}`);
  });

  return child;
}

// Start all services
const backend = startService('Backend', 'npm start', 'backend');
const frontend = startService('Frontend', 'npm start', 'frontend');
const dashboard = startService('Dashboard', 'npm start', 'dashboard');

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Stopping all services...');
  backend.kill();
  frontend.kill();
  dashboard.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Stopping all services...');
  backend.kill();
  frontend.kill();
  dashboard.kill();
  process.exit(0);
});

console.log('\n✅ All services are starting...');
console.log('🌐 Frontend (Entry Point) will be available at: http://localhost:3000');
console.log('📊 Dashboard (After Login) will be available at: http://localhost:3001');
console.log('🔧 Backend API will be available at: http://localhost:3002');
console.log('\n📋 Application Flow:');
console.log('   1. Start at http://localhost:3000 (Frontend)');
console.log('   2. Login/Signup to access dashboard');
console.log('   3. Dashboard opens at http://localhost:3001');
console.log('   4. Logout redirects back to frontend');
console.log('\nPress Ctrl+C to stop all services\n'); 