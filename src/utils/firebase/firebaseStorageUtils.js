import { storage } from 'src/boot/firebase';
import uuid from 'uuid/v4';

class firebaseStorageUtils {
  constructor() {}

  async add(file) {
    const ref = storage.ref().child(uuid());

    const rtn = await new Promise((res, rej) => {
      ref
        .put(file)
        .then((snapshot) => res(snapshot.ref.getDownloadURL()))
        .catch((e) => rej(e));
    });

    console.log(/* LL */ 11, 'rtn', rtn);

    return rtn;
  }
}

export default new firebaseStorageUtils();
