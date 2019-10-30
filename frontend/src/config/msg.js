import Vue from 'vue';
import Toasted from 'vue-toasted';

Vue.use(Toasted,{
    iconPack : 'fontawesome',
    duration : 3000
})

Vue.toasted.register(
    'defaultSucess',
    'Operação realizada com sucesso.',
    {type:'succes', icons :'check'}
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Opss.. Erro inesperado.' : payload.msg,
    {type:'error', icons :'times'}
)