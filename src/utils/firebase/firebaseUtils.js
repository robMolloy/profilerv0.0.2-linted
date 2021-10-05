import { sendNext, sendNextIfCurrentlyBlank } from '../utilsSendNext';
import { firebaseAuth, db } from '../../boot/firebase';

export const setPersistedAuthentication = (authorised) => {
  localStorage.setItem('isAuthenticated', authorised ? 'true' : 'false');
};

export const registerUser = async (payload) => {
  const {
    email, firstName, lastName, password,
  } = payload;
  let error;
  sendNext('/users');

  await firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .catch((e) => { (error = e); });

  if (!error) {
    const { uid } = firebaseAuth.currentUser;
    await db
      .collection('users')
      .doc(uid)
      .set({
        email, firstName, lastName, id: uid, lastActive: Date.now(),
      })
      .catch((e) => { (error = e); });
  }
};

export const loginUser = async ({ email, password }) => {
  let error;

  sendNextIfCurrentlyBlank('/users');
  await firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .catch((e) => { (error = e); });

  if (!error) console.log(/* LL */ 40, 'no error');
};

export const logoutUser = async () => {
  let error;

  sendNext('/auth');
  await firebaseAuth.signOut().catch((e) => {
    sendNext(undefined);
    error = e;
  });

  if (!error) {
    console.log(/* LL */ 52, 'no error');
  }
};
