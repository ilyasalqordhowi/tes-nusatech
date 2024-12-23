const responseTimes = [
  { endpoint: "/api/v1/users", time: 120 },
  { endpoint: "/api/v1/products", time: 80 },
  { endpoint: "/api/v1/orders", time: 150 },
];

function hitungRataRataWaktuRespons(logs) {
  if (logs.length === 0) return 0;

  const totalTime = logs.reduce((total, log) => total + log.time, 0);

  return totalTime / logs.length;
}

const rataRata = hitungRataRataWaktuRespons(responseTimes);
console.log(`Rata-rata waktu respons: ${rataRata} ms`);
