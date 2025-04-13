import https from "https";
import readline from "readline";
import chalk from "chalk";


//  for finding api create account here then login use same url https://app.exchangerate-api.com/dashboard/confirmed
const APIKey = `#`;
const url = `https://v6.exchangerate-api.com/v6/${APIKey}/latest/USD`;

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const convertCurrent = (amount, rate) => {
  return (amount * rate).toFixed(3);
};

console.log(
  chalk.bold.bgBlue.white("\n 💰 CURRENCY CONVERTER 💰 \n") +
    chalk.italic("Convert USD to any currency\n")
);


https.get(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk;
  });
  response.on("end", () => {
    const rates = JSON.parse(data).conversion_rates;

    r1.question( chalk.yellow.bold("Enter the amount in USD: "), (amount) => {
      r1.question(chalk.cyan.bold("Enter the currency code (like PKR, EUR, GBP): "), (currency) => {
        const rate = rates[currency.toUpperCase()];
        if (rate) {
          console.log(
            `${amount} USD is approximately ${convertCurrent(
              amount,
              rate
            )} ${currency}`
          );
        } else {
          console.log(
            chalk.red.bold("\n❌ Invalid Currency Code!") +
              chalk.yellow("\nTry valid codes like PKR, EUR, INR, GBP etc.\n")
          );
        }
      });
    });
  });
});
