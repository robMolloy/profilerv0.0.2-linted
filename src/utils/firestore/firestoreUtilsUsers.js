import {
  db,
  // firebaseAuth
} from '../../boot/firebase';

export const fetchUserById = (id) => new Promise((res, rej) => {
  db.collection('users')
    .doc(id)
    .get()
    .then((response) => res(response.data()))
    .catch((e) => rej(e));
});

export const fetchAllUsers = () => new Promise((res, rej) => {
  db
    .collection('users')
    .get()
    .then((response) => {
      const users = response.docs.map((doc) => doc.data());
      res(users);
    })
    .catch((e) => rej(e));
});

export const isUserActive = (lastActive) => {
  const currentValue = lastActive - Date.now() - 15000;
  return currentValue > 0;
};

export const userIsActive = (uid) => {
  if (uid && !document.hidden) {
    db.collection('users')
      .doc(uid)
      .set({ lastActive: Date.now() }, { merge: true });
  }
};
