export default async function getData(numberUnity) {
  try {
    let res = await fetch(`../data/u${numberUnity}.json`);
    let json = await res.json();

    if (!res.ok) throw { res };
    return json;
  } catch (err) { console.warn(err); }
}
