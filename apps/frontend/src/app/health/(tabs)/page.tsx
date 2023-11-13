export default async function Index() {
  await new Promise((r) => { setTimeout(r, 2000); });
  return <div>index</div>;
}
