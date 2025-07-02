function generateStatement() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const accountNumber = document.getElementById('account-number').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!accountNumber || !password) {
    alert("Please enter both account number and password.");
    return;
  }

  // 더미 거래내역
  const transactions = [
    { date: "2025-06-01", desc: "Deposit", amount: "+$5,000" },
    { date: "2025-06-03", desc: "Transfer to X", amount: "-$1,200" },
    { date: "2025-06-10", desc: "ATM Withdrawal", amount: "-$300" },
    { date: "2025-06-20", desc: "Interest", amount: "+$12" }
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
