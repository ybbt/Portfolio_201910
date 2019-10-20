import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Characters from './views/Characters.vue'
import CharacterDetailItem from './components/CharacterDatailItem.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: '/characters',
    },
    {
      path: '/characters',
      name: 'Characters',
      // component: Characters,
      redirect: '/characters/page/1'
    },
    {
      path: '/characters/page/:number',
      name: 'CharactersPage',
      component: Characters,
    },
    {
      path: '/characters/:id',
      name: 'CharacterDetailItem',
      component: CharacterDetailItem,
    },


  ]
})
