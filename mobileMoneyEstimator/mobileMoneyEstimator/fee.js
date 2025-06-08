function estimateTransactionFee(amountToSend) {
  const feePercent = 0.015;
  const minFee = 10;
  const maxFee = 70;

  let fee = amountToSend * feePercent;
  fee = Math.max(minFee, Math.min(fee, maxFee));

  const total = amountToSend + fee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${total}\n`);
  console.log("Send Money Securely!");
}

const input = prompt("Unatuma Ngapi? (KES):");
const amountToSend = Number(input);

estimateTransactionFee(amountToSend);