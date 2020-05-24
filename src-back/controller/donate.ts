export default async function donate(ctx: any) {
  const validCurrencies = new Set(['USD', 'EUR', 'GBP', 'RUB']);
  const {amount, currency} = ctx.request.body;
  if (amount === undefined || currency === undefined) {
    ctx.status = 400;
    ctx.body = {
      error: 'Not all required params'
    }
    return;
  }
  if (+amount === 0) {
    ctx.status = 400;
    ctx.body = {
      error: 'Amount must be not 0'
    }
    return;
  }
  if (!validCurrencies.has(currency)) {
    ctx.status = 400;
    ctx.body = {
      error: 'Not valid currency'
    }
    return;
  }
  const msg = 'Thank you for your donation!';
  try {
    await ctx.db.collection('donations').insertOne({amount, currency});
    ctx.body = {
      data: msg
    }
  } catch (e) {
    ctx.status = 400;
    ctx.body = {
      error: 'Db error'
    }
    console.log(e);
  }
};
