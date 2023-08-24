export async function GET(request: Request) {
  console.log(2223333, 'get');
  return new Response('Hello, Next.js!');
}
