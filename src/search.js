async function fetchSearch(searchParam) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=2f03edc7&t=${searchParam}`,
  );
  return res.json();
}

export default fetchSearch;
