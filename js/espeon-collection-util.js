const getEspeonsData = async() => {
  const res = await fetch('/json/espeons.json');
  const data = await res.json();

  let espeons = data.espeons.sort((a, b) => {
      return new Date(b.timestamp) > new Date(a.timestamp);
  });

  return espeons;
}