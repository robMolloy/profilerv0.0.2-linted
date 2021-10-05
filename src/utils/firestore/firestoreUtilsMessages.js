import { db } from 'src/boot/firebase';
import { v4 as uuid } from 'uuid';

export const sendMessage = (message) => {
  let { uid, uid2, text } = message;
  text = text.trim();

  if (!text) return;

  const sendId = uuid();
  const receiveId = uuid();
  const createdAt = Date.now();

  const sendRef = db.collection('messages').doc(sendId);
  const receiveRef = db.collection('messages').doc(receiveId);

  const sendMsg = {
    id: sendId, uid, uid2, text, sent: true, createdAt,
  };
  ({ uid: uid2, uid2: uid, text } = message);
  const receiveMsg = {
    id: receiveId, uid, uid2, text, sent: false, createdAt,
  };

  const batch = db.batch();
  batch.set(sendRef, sendMsg);
  batch.set(receiveRef, receiveMsg);
  batch.commit();
};
