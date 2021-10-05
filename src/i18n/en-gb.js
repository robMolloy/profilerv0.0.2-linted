import altConfig from '../config/altConfig';

const projectName = altConfig.project.name;

export default {
  project: {
    name: projectName,
    welcomeText: 'Welcome To',
  },
  pages: {
    PageIndex: { name: '', label: 'index', title: projectName },
    PageAuth: { name: '', label: 'auth', title: 'login' },
    PageChats: { name: '', label: 'chat', title: 'chats' },
    PageUsers: { name: '', label: 'users', title: 'users' },
    PageProfiles: { name: '', label: 'profiles', title: 'profiles' },
    PageError: { name: '', label: 'error', title: 'error' },
  },
  fields: {
    email: 'Email',
    confirmEmail: 'Confirm Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
  },
  errors: {
    notAMatch: 'Field must match: {0}',
    invalidEmail: 'This email address does not look valid',
    required: 'Required',
    arrayLength0: 'arrayLength0',
  },
  success: 'Action was successful',
};
