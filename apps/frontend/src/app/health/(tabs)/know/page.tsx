export default async function Index() {
  await new Promise((r) => { setTimeout(r, 5000); });
  return <div>know</div>;
}
