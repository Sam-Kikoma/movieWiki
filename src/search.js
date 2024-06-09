async function fetchSearch(searchParam) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=2f03edc7&t=${searchParam}`,
  );
  if (!res.ok) {
    throw new Error("Something went wrong with the search");
  }
  return res.json();
}

export default fetchSearch;
