import DashboardScreen from '../screens/DashboardScreen';
import LoginScreen from '../screens/LoginScreen';
import MessagesScreen from '../screens/MessagesScreen';
import RegisterScreen from '../screens/RegisterScreen';

export const authRoutes = [
  {
    name: 'Register',
    component: RegisterScreen,
    options: {headerShown: false},
  },
  {
    name: 'Login',
    component: LoginScreen,
    options: {headerShown: false},
  },
];

export const userRoutes = [
  {
    name: 'Dashboard',
    component: DashboardScreen,
    options: {headerShown: true},
  },
  {
    name: 'Messages',
    component: MessagesScreen,
    options: {headerShown: true},
  },
  // other screens
];
