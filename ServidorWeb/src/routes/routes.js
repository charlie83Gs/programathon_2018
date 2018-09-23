import Home from '../view/home/home.js';
import Login from '../view/login/login.js';
import Register from '../view/register/register.js';
import Navigator from '../component/navigator.js';
import ChildRegister from '../view/child_register/child_register.js'
import RegistroAntecedentes from '../view/registro_antecedentes/registro_antecedentes.js'
import Interprete from '../view/interprete/interprete.js'

export const routes = {
	"Default" : Login,
	"Home" : Home,
	"Login" : Login,
	"Navigator" : Navigator,
	"Register": Register,
	"ChildRegister": ChildRegister,
	"RegistroAntecedentes": RegistroAntecedentes,
	"Interprete": Interprete	
};
