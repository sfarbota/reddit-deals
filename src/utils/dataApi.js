export async function getRedditDeals(subReddit) {
  return fetch(`https://www.reddit.com/r/${subReddit}/new.json`).then(res =>
    res.json()
  );
}

export async function getDeal(subReddit, id) {
  return fetch(
    `https://www.reddit.com/r/${subReddit}/comments/${id}/new.json`
  ).then(res => res.json());
}
