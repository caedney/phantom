async function fetchAllData() {
  const limit = 5000;
  const apiUrl = "https://data.london.gov.uk/api/table/s8c9t_j4fs2";
  const response = await fetch(`${apiUrl}?$limit=${limit}`).then(resp =>
    resp.json()
  );

  const responses = await Promise.all(
    Array.from(Array(response.info.pages), (_, i) =>
      fetch(
        `${apiUrl}?$where=date<'2021-01-01'&$limit=${limit}&$offset=${
          limit * i
        }`
      ).then(resp => resp.json())
    )
  );

  const allData = responses.reduce((acc, cur) => {
    return acc.concat(cur.rows);
  }, []);

  return allData;
}

export default fetchAllData;
