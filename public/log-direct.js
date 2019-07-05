const userObj = await getUser();
const isNotLoggedIn = !userObj || userObj.verified !== 1;

if (isNotLoggedIn) {
  window.location.href = '/index.html';
}