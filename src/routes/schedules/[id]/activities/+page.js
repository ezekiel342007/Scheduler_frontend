export async function load({ fetch, params }) {
  const id = params.id;
  const url = `http://localhost:8000/schedule/${id}/activity`;
  const response = await fetch(url);
  const data = response.json();
  return { data }
}
