const version = "@3.1.0";
const botName = "🟢 GROOVE MUSIC BOT";

function printWatermark() {
  console.log('\x1b[1m\x1b[36m╔════════════════════════════════════════════╗');
  console.log('\x1b[1m\x1b[36m║                                            ║');
  console.log(`\x1b[1m\x1b[36m              ${botName}     `);
  console.log(`\x1b[1m\x1b[36m            👑 VERSION: ${version}    `);
  console.log('\x1b[1m\x1b[36m║                                            ║');
  console.log('\x1b[1m\x1b[36m╚════════════════════════════════════════════╝\x1b[0m');
}

module.exports = {
  printWatermark,
};