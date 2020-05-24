export default async function donate(ctx: any) {
  const msg = 'Thank you for your donation!';
  ctx.body = {
    data: msg
  }
};
