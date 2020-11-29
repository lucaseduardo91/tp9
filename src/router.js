import VueRouter from 'vue-router';
import Home from './components/Home';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import PesquisaLocal from './components/PesquisaLocal';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contato',
            name: 'contato',
            component: Contato
        },
        {
            path: '/sobre',
            name: 'sobre',
            component: Sobre
        },
        {
            path: '/hospital',
            name: 'hospital',
            component: PesquisaLocal
        },
        {
            path: '/delegacia',
            name: 'delegacia',
            component: PesquisaLocal
        },
        {
            path: '/ponto-turistico',
            name: 'ponto-turistico',
            component: PesquisaLocal
        },
        {
            path: '/praia',
            name: 'praia',
            component: PesquisaLocal
        },
        {
            path: '/onde-comer',
            name: 'onde-comer',
            component: PesquisaLocal
        },
        {
            path: '/onde-dormir',
            name: 'onde-dormir',
            component: PesquisaLocal
        },
        {
            path: '/evento',
            name: 'evento',
            component: PesquisaLocal
        },
        {
            path: '/banheiro',
            name: 'banheiro',
            component: PesquisaLocal
        }
    ]
});