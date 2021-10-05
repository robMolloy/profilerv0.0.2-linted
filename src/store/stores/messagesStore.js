import cloneDeep from 'lodash/cloneDeep';
import { sendMessage } from '../../utils/firestore/firestoreUtilsMessages';
import Store from './__Store';

const store = new Store({
  dbName: 'messages',
  own: true,
  requiresAuthentication: true,
  where: [],
});

store.addActions = {
  sendMessage: ({ rootGetters }, payload) => {
    const uid = rootGetters['auth/uid'];
    sendMessage({ ...payload, uid });
  },
};

store.addGetters = {
  groupByUid2: (state, getters) => getters.groupByKey('uid2'),
  groupValuesByUid2: (state, getters) => getters.groupValuesByKey('uid2'),

  getMessageValuesByUid: (state, getters) => (id, groupTexts = false) => (groupTexts
    ? getters.valuesByUid2InGroupedFormat(id)
    : getters.valuesByUid2(id)),
  valuesByUid2: (state, getters) => (id) => {
    const values = getters.groupValuesByUid2[id] ?? [];
    return values.sort((a, b) => a.createdAt - b.createdAt);
  },

  valuesByUid2InGroupedFormat: (state, getters) => (id) => {
    const values = cloneDeep(getters.valuesByUid2(id));

    const rtn = [];
    let lastMsgGroup = {};
    values.forEach((msg) => {
      const sameSenderAsLast = msg.sent === lastMsgGroup.sent && msg.uid2 === lastMsgGroup.uid2;

      if (sameSenderAsLast) lastMsgGroup.text.push(msg.text);
      else {
        lastMsgGroup = Object.assign(msg, { text: [msg.text] });
        rtn.push(lastMsgGroup);
      }
    });
    return rtn;
  },
};

export default store.store;
