export default async function donate(ctx: any) {
  const validCurrencies = new Set(['USD', 'EUR', 'GBP', 'RUB']);
  const params = ctx.request.body;
  if (params.amount === undefined || params.currency === undefined) {
    ctx.status = 400;
    ctx.body = {
      error: 'Not all required params'
    }
    return;
  }
  if (+params.amount === 0) {
    ctx.status = 400;
    ctx.body = {
      error: 'Amount must be not 0'
    }
    return;
  }
  if (!validCurrencies.has(params.currency)) {
    ctx.status = 400;
    ctx.body = {
      error: 'Not valid currency'
    }
    return;
  }
  const msg = 'Thank you for your donation!';
  ctx.body = {
    data: msg
  }
};
