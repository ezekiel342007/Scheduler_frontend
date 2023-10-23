export async function load({ fetch }) {
  const url = "http://localhost:8000/schedule";
  const result = await fetch(url);
  const data = await result.json();
  return { data };
}
