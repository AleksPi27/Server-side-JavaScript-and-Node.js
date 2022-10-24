const tomorrow = new Date(Date.now());
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setUTCHours(0,0,0,0);

console.log(tomorrow)