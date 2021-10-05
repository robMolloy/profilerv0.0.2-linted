export const userListener = () => {
  unsubscribeListener = db.collection('users').onSnapshot((snapshot) => {
    snapshot.docs.map((itm) => itm.data());
  });

  // TODO: just commit "docChanges", not all docs
  // see: https://github.com/robMolloy/small-business-tracker/blob/main/src/firebase/firestore/useFirestoreListener.js

  return () => {
    unsubscribeListener();
    // functions.set({});
  };
};
