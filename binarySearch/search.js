// Given an array of friends and an ID, find the friend with the ID and return otherwise null.

const friends = [
  { id: 8, name: "Hannah" },
  { id: 2, name: "Bob" },
  { id: 10, name: "James" },
  { id: 4, name: "Diana" },
  { id: 6, name: "Fiona" },
  { id: 1, name: "Alice" },
  { id: 7, name: "George" },
  { id: 9, name: "Isabella" },
  { id: 3, name: "Charlie" },
  { id: 5, name: "Edward" },
];

const findFriend = (targetFriendId) => {
  let foundFriend = null;
  const sortedFriends = friends.sort((a, b) => a.id - b.id);

  let low = 0;
  let high = sortedFriends.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (sortedFriends[mid].id === targetFriendId) {
      foundFriend = sortedFriends[mid];
      break;
    }

    if (targetFriendId > sortedFriends[mid].id) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return foundFriend;
};

console.log(findFriend(7));
