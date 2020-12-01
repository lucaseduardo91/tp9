import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Contato from './components/Contato';
import Sobre from './components/Sobre';
import PesquisaLocal from './components/PesquisaLocal';
import Detalhe from './components/Detalhe';

Vue.use(VueRouter);

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
            name: 'hospitais',
            component: PesquisaLocal
        },
        {
            path: '/hospital/:id',
            name: 'hospitais-detalhe',
            component: Detalhe
        },
        {
            path: '/delegacia',
            name: 'delegacias',
            component: PesquisaLocal
        },
        {
            path: '/delegacia/:id',
            name: 'delegacias-detalhe',
            component: Detalhe
        },
        {
            path: '/ponto-turistico',
            name: 'pontos-turisticos-detalhe',
            component: PesquisaLocal
        },
        {
            path: '/ponto-turistico/:id',
            name: 'pontos-turisticos-detalhe',
            component: Detalhe
        },
        {
            path: '/praia',
            name: 'praias',
            component: PesquisaLocal,
        },
        {
            path: '/praia/:id',
            name: 'praias-detalhe',
            component: Detalhe,
        },
        {
            path: '/onde-comer',
            name: 'onde-comer',
            component: PesquisaLocal
        },
        {
            path: '/onde-comer/:id',
            name: 'onde-comer-detalhe',
            component: Detalhe
        },
        {
            path: '/onde-dormir',
            name: 'onde-dormir',
            component: PesquisaLocal
        },
        {
            path: '/onde-dormir/:id',
            name: 'onde-dormir-detalhe',
            component: Detalhe
        },
        {
            path: '/evento',
            name: 'eventos',
            component: PesquisaLocal
        },
        {
            path: '/evento/:id',
            name: 'eventos-detalhe',
            component: Detalhe
        },
        {
            path: '/banheiro',
            name: 'banheiros',
            component: PesquisaLocal
        },
        {
            path: '/banheiro/:id',
            name: 'banheiros-detalhe',
            component: Detalhe
        }
    ]
});