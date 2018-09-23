import Home from '../view/home/home.js';
import Login from '../view/login/login.js';
import Register from '../view/register/register.js';
import Navigator from '../component/navigator.js';

export const routes = {
	"Default" : Login,
	"Home" : Home,
	"Login" : Login,
	"Navigator" : Navigator,
	"Register": Register
};
