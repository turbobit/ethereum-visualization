const {getDecimalFromHex} = require('./helpers');

function stripBlock(block) {
  const transactions = block.transactions.map(tx => ({
    // creates: tx.creates,
    from: tx.from,
    gas: getDecimalFromHex(tx.gas),
    gasPrice: getDecimalFromHex(tx.gasPrice),
    hash: tx.hash,
    input: Buffer.from(tx.input.replace(/^0x/, ''), 'hex').toString('utf8'),
    to: tx.to,
    i: getDecimalFromHex(tx.transactionIndex),
    value: getDecimalFromHex(tx.value)
  }));

  return {
    hash: block.hash,
    number: getDecimalFromHex(block.number),
    timestamp: getDecimalFromHex(block.timestamp),
    transactions
    // author: block.author,
    // difficulty: block.difficulty,
    // extraData: block.extraData,
    // gasLimit: getDecimalFromHex(block.gasLimit),
    // gasUsed: getDecimalFromHex(block.gasUsed),
    // miner: block.miner,
    // parentHash: block.parentHash,
    // size: block.size,
    // totalDifficulty: block.totalDifficulty
  };
}

module.exports = stripBlock;
