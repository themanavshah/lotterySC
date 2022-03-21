// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

//console.log(source);

// const input = {
//     language: 'Solidity',
//     sources: {
//       'Inbox.sol': {
//         content: source,
//       },
//     },
//     settings: {
//       outputSelection: {
//         '*': {
//           '*': ['*'],
//         },
//       },
//     },
//   };

//print(solc.compile(source, 1));
//console.log(solc.compile(source).contracts);

module.exports = solc.compile(source, 1).contracts[
    ':Lottery'
  ];