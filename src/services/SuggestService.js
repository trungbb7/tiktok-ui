async function suggestService() {
  const url = 'https://tiktok.fullstack.edu.vn/api/users/suggested?page=1&per_page=20';
  let result = [];
  await fetch(url)
    .then((res) => res.json())
    .then((res) => {
      result = res.data;
    })
    .catch((err) => {
      console.error(err);
    });

  return result;
}

export default suggestService;
