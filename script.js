function generateStatement() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const accountNumber = document.getElementById('account-number').value.trim();
  const password = document.getElementById('password').value.trim();

  const validAccounts = {
    "58890204050307": "4107",
    "888-999-000": "secret987",
    "777-555-222": "bank2025"
  };

  if (!validAccounts[accountNumber] || validAccounts[accountNumber] !== password) {
    alert("Invalid account number or password.");
    return;
  }


  const transactions = [
    { date: "2025-06-01", desc: "Whisper of the Heart", amount: "+$300,000" },
    { date: "2025-06-03", desc: "Transfer to Shinhan", amount: "-$1,200" },
    { date: "2025-06-10", desc: "ATM Withdrawal", amount: "-$300" },
    { date: "2025-06-20", desc: "A Peppermint Candy", amount: "+$120,000" }
  ];

  doc.setFont("Helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Offshore Bank - Account Statement", 10, 20);

  doc.setFontSize(12);
  doc.setFont("Helvetica", "normal");
  doc.text(`Account: ${accountNumber}`, 10, 30);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 10, 40);
  doc.text("----------------------------------------------------", 10, 45);
  doc.text("Date        Description              Amount", 10, 55);

  let y = 65;
  transactions.forEach(tx => {
    doc.text(`${tx.date}   ${tx.desc.padEnd(20)}   ${tx.amount}`, 10, y);
    y += 10;
  });

  doc.save(`statement-${accountNumber}.pdf`);
}
