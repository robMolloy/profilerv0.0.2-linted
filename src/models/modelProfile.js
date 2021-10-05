import Model from './__Model';

const blankProfile = {
  id: '',
  company: '',
  description: '',
  hashtags: [],
  imageUrl: '',
  location: '',
  title: '',
  uid: '',
};

export const modelProfile = new Model({
  name: 'profile',
  initData: blankProfile,
});
