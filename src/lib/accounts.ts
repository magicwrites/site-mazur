import {
  PUBLIC_COMPANY_EUR,
  PUBLIC_COMPANY_PLN,
  PUBLIC_PERSONAL_EUR,
  PUBLIC_PERSONAL_PLN,
  PUBLIC_PERSONAL_USD
} from '$env/static/public';

const accounts = {
  personal: {
    usd: PUBLIC_PERSONAL_USD,
    eur: PUBLIC_PERSONAL_EUR,
    pln: PUBLIC_PERSONAL_PLN
  },
  company: {
    eur: PUBLIC_COMPANY_EUR,
    pln: PUBLIC_COMPANY_PLN
  }
};

export const personal = [
  {
    id: Symbol(),
    title: 'USD',
    number: accounts.personal.usd
  },
  {
    id: Symbol(),
    title: 'EUR',
    number: accounts.personal.eur
  },
  {
    id: Symbol(),
    title: 'PLN',
    number: accounts.personal.pln
  }
];

export const company = [
  {
    id: Symbol(),
    title: 'EUR',
    number: accounts.company.eur
  },
  {
    id: Symbol(),
    title: 'PLN',
    number: accounts.company.pln
  }
];

export const entries = [
  {
    title: 'środki prywatne',
    accounts: personal
  },
  {
    title: 'środki firmowe',
    accounts: company
  }
];
