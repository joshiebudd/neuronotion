import { useState, useEffect } from 'react';

// Map of country codes to their primary currency codes
const COUNTRY_TO_CURRENCY = {
  US: 'USD', GB: 'GBP', CA: 'CAD', AU: 'AUD', NZ: 'NZD',
  JP: 'JPY', CN: 'CNY', KR: 'KRW', IN: 'INR', SG: 'SGD',
  HK: 'HKD', TW: 'TWD', TH: 'THB', MY: 'MYR', PH: 'PHP',
  ID: 'IDR', VN: 'VND', BR: 'BRL', MX: 'MXN', AR: 'ARS',
  CL: 'CLP', CO: 'COP', PE: 'PEN', ZA: 'ZAR', NG: 'NGN',
  EG: 'EGP', KE: 'KES', GH: 'GHS', AE: 'AED', SA: 'SAR',
  QA: 'QAR', KW: 'KWD', BH: 'BHD', OM: 'OMR', IL: 'ILS',
  TR: 'TRY', RU: 'RUB', UA: 'UAH', PL: 'PLN', CZ: 'CZK',
  HU: 'HUF', RO: 'RON', BG: 'BGN', HR: 'EUR', SE: 'SEK',
  NO: 'NOK', DK: 'DKK', IS: 'ISK', CH: 'CHF',
  // Eurozone countries
  AT: 'EUR', BE: 'EUR', CY: 'EUR', EE: 'EUR', FI: 'EUR',
  FR: 'EUR', DE: 'EUR', GR: 'EUR', IE: 'EUR', IT: 'EUR',
  LV: 'EUR', LT: 'EUR', LU: 'EUR', MT: 'EUR', NL: 'EUR',
  PT: 'EUR', SK: 'EUR', SI: 'EUR', ES: 'EUR',
  // Additional countries
  PK: 'PKR', BD: 'BDT', LK: 'LKR', NP: 'NPR',
};

// Map of currency codes to their symbols
const CURRENCY_SYMBOLS = {
  USD: '$', GBP: '£', EUR: '€', CAD: 'CA$', AUD: 'A$',
  NZD: 'NZ$', JPY: '¥', CNY: '¥', KRW: '₩', INR: '₹',
  SGD: 'S$', HKD: 'HK$', TWD: 'NT$', THB: '฿', MYR: 'RM',
  PHP: '₱', IDR: 'Rp', VND: '₫', BRL: 'R$', MXN: 'MX$',
  ARS: 'AR$', CLP: 'CL$', COP: 'CO$', PEN: 'S/', ZAR: 'R',
  NGN: '₦', EGP: 'E£', KES: 'KSh', GHS: 'GH₵', AED: 'AED',
  SAR: 'SAR', QAR: 'QAR', KWD: 'KWD', BHD: 'BHD', OMR: 'OMR',
  ILS: '₪', TRY: '₺', RUB: '₽', UAH: '₴', PLN: 'zł',
  CZK: 'Kč', HUF: 'Ft', RON: 'lei', BGN: 'лв', SEK: 'kr',
  NOK: 'kr', DKK: 'kr', ISK: 'kr', CHF: 'CHF',
  PKR: 'Rs', BDT: '৳', LKR: 'Rs', NPR: 'Rs',
};

const CACHE_KEY = 'nn_currency_data';
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in ms

function getCachedData() {
  if (typeof window === 'undefined') return null;
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    const parsed = JSON.parse(cached);
    if (Date.now() - parsed.timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function setCachedData(data) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      ...data,
      timestamp: Date.now(),
    }));
  } catch {
    // localStorage might be full or unavailable
  }
}

/**
 * Hook that detects the user's country via IP geolocation,
 * fetches the exchange rate from USD to their local currency,
 * and provides a conversion function that rounds UP to the nearest whole number.
 *
 * Returns:
 *  - currencySymbol: the symbol for the detected currency (e.g. "£")
 *  - convertPrice: function that takes a USD price and returns the converted, rounded-up price
 *  - isLoading: whether the data is still being fetched
 *  - currencyCode: the ISO currency code (e.g. "GBP")
 *  - countryCode: the detected country code (e.g. "GB")
 */
export function useCurrencyConversion() {
  const [state, setState] = useState({
    currencySymbol: '$',
    currencyCode: 'USD',
    countryCode: 'US',
    rate: 1,
    isLoading: true,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchCurrencyData() {
      // Check cache first
      const cached = getCachedData();
      if (cached && cached.currencyCode && cached.rate) {
        setState({
          currencySymbol: cached.currencySymbol,
          currencyCode: cached.currencyCode,
          countryCode: cached.countryCode,
          rate: cached.rate,
          isLoading: false,
        });
        return;
      }

      try {
        // Step 1: Detect user's country via IP geolocation
        const geoResponse = await fetch('https://ipapi.co/json/', {
          signal: AbortSignal.timeout(5000),
        });
        if (!geoResponse.ok) throw new Error('Geolocation failed');
        const geoData = await geoResponse.json();
        const countryCode = geoData.country_code || 'US';
        const currencyCode = COUNTRY_TO_CURRENCY[countryCode] || 'USD';

        // If already USD, no conversion needed
        if (currencyCode === 'USD') {
          const data = {
            currencySymbol: '$',
            currencyCode: 'USD',
            countryCode,
            rate: 1,
          };
          setCachedData(data);
          if (!cancelled) {
            setState({ ...data, isLoading: false });
          }
          return;
        }

        // Step 2: Fetch exchange rate from USD to the detected currency
        const rateResponse = await fetch(
          `https://api.frankfurter.dev/v1/latest?base=USD&symbols=${currencyCode}`,
          { signal: AbortSignal.timeout(5000) }
        );
        if (!rateResponse.ok) throw new Error('Exchange rate fetch failed');
        const rateData = await rateResponse.json();
        const rate = rateData.rates?.[currencyCode];

        if (!rate) throw new Error('Rate not found');

        const data = {
          currencySymbol: CURRENCY_SYMBOLS[currencyCode] || currencyCode,
          currencyCode,
          countryCode,
          rate,
        };
        setCachedData(data);
        if (!cancelled) {
          setState({ ...data, isLoading: false });
        }
      } catch (error) {
        // On any failure, fall back to USD
        console.warn('Currency conversion failed, defaulting to USD:', error.message);
        const fallback = {
          currencySymbol: '$',
          currencyCode: 'USD',
          countryCode: 'US',
          rate: 1,
        };
        setCachedData(fallback);
        if (!cancelled) {
          setState({ ...fallback, isLoading: false });
        }
      }
    }

    fetchCurrencyData();

    return () => {
      cancelled = true;
    };
  }, []);

  // Convert a USD price to the local currency, always rounding UP
  const convertPrice = (usdPrice) => {
    return Math.ceil(usdPrice * state.rate);
  };

  return {
    currencySymbol: state.currencySymbol,
    currencyCode: state.currencyCode,
    countryCode: state.countryCode,
    convertPrice,
    isLoading: state.isLoading,
  };
}
