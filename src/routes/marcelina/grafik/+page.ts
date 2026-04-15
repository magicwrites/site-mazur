export const load = async ({ url }: { url: URL }) => {
  const clients = {
    small: Number(url.searchParams.get('mali')) || 30,
    medium: Number(url.searchParams.get('sredni')) || 9,
    large: Number(url.searchParams.get('duzy')) || 1
  };

  const prices = {
    small: Number(url.searchParams.get('mali-cena')) || 250,
    medium: Number(url.searchParams.get('sredni-cena')) || 550,
    large: Number(url.searchParams.get('duzy-cena')) || 1500
  };

  const costs = Number(url.searchParams.get('koszty')) || 3000;
  const tax = Number(url.searchParams.get('zostaje')) || 0.8;

  return {
    clients,
    prices,
    costs,
    tax
  }
}