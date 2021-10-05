import { db } from 'src/boot/firebase';
import { v4 as uuid } from 'uuid';

class firestoreUtilsDefault {
  constructor({ collectionName, template }) {
    const collection = db.collection(collectionName);
    Object.assign(this, { collection, collectionName, template });
  }

  async add(data) {
    const id = uuid();
    const createdAt = Date.now();
    const updatedAt = createdAt;

    data = {
      ...data, id, createdAt, updatedAt,
    };

    // if success response = data
    return new Promise((res, rej) => {
      this.collection.doc(id)
        .set(data)
        .then(() => res(data))
        .catch((e) => rej({ ...e }));
    });
  }
}

export default firestoreUtilsDefault;
