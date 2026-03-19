const PROD_URL = 'https://app.neuro-notion.com';
const BETA_URL = 'https://beta.neuro-notion.com';
const ENV_STORAGE_KEY = 'neuro_app_env';

/**
 * Stores the app environment in localStorage.
 * Called on page load with the value of the ?app= query param.
 * Only 'beta' or 'prod' are accepted; anything else is ignored.
 */
export function storeAppEnv(env) {
  if (typeof window === 'undefined') return;
  try {
    if (env === 'beta' || env === 'prod') {
      localStorage.setItem(ENV_STORAGE_KEY, env);
    }
  } catch {}
}

/**
 * Returns the correct app base URL for the stored environment.
 * Falls back to prod if nothing is stored or localStorage is unavailable.
 * @param {string} path  Optional path to append (e.g. '/?page=login')
 */
export function getAppUrl(path = '') {
  if (typeof window === 'undefined') return PROD_URL + path;
  try {
    const env = localStorage.getItem(ENV_STORAGE_KEY);
    const base = env === 'beta' ? BETA_URL : PROD_URL;
    return base + path;
  } catch {
    return PROD_URL + path;
  }
}
