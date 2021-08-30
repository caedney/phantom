async function fetchAllBoroughs() {
  return await fetch(
    "https://data.london.gov.uk/api/table/s8c9t_j4fs2?sql=SELECT DISTINCT area_name FROM dataset"
  )
    .then(res => res.json())
    .then(data => {
      return data.rows
        .map(row => ({
          value: row.area_name,
          label: row.area_name,
        }))
        .sort((a, b) => (a.label < b.label ? -1 : 1));
    });
}

export default fetchAllBoroughs;
