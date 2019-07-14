const API_KEY = '???????????????????????';

export function apiUrl(symbol: string): string {
  return `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
}

export function searchApiUrl(symbol: string): string {
  return `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${symbol}&apikey=${API_KEY}`;
}

export function weeklyAdjusted(symbol: string): string {
  return `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${API_KEY}`;
}