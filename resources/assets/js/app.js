
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

//Vue.component('example', require('./components/Example.vue'));
//import Vue from 'vue';
//import VueResource from 'vue-resource';

// import TodoItems from './components/Todo/TodoItems.vue';
// import TodoAddForm from './components/Todo/TodoAdd.vue';

//Vue.use(VueResource);

// Vue.component('todo-item', TodoItems);
// Vue.component('todo-add-form', TodoAddForm);
//Vue.component('example', require('./components/Example.vue'));

/*Adding CSRF token to all HTTP Request*/
//Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector("meta[name=csrf-token]").getAttribute('content');

// new Vue({
//     el: '#vue-app',

//     created() {
//         this.$http.get('api/v1/todos').then((response) => {
//             this.todos = response.data;
//         });
//     },

//     data: {
//         newTodo: {},
//         todos: {}
//     },

//     watch: {
//         newTodo(newval, oldval) {
//             this.todos.push({
//                 id: Math.floor(Date.now()),
//                 title: newval.title,
//                 completed: false
//             });
//         }
//     }
// });

// import Vue from 'vue'
// import VueResource from 'vue-resource'
import VueValidator from 'vue-validator'

import store from './vuex/store'
import TodoItems from './components/Todo/TodoItems.vue'
import TodoAddForm from './components/Todo/TodoAdd.vue'

// Vue.use(VueResource)
Vue.use(VueValidator)

Vue.component('todo-item', TodoItems)
Vue.component('todo-add-form', TodoAddForm)

/*Adding CSRF token to all HTTP Request*/
// Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector("meta[name=csrf-token]").getAttribute('content')

new Vue({
    el: 'body',
    store
})

// const app = new Vue({
//     el: 'body',
//     data: {
//         todos: [{id: 1, title: 'Go Shopping', completed: true}],
//         newTodo: {}
//     },

//     created() {
//         this.$http.get('http://localhost:8010/api/v1/todos').then((response) => {
//         	console.log(this.todos)
//             this.todos = response.data;
//         });
//     },

//     watch: {
//         newTodo(newval, oldval) {
//             this.todos.push({
//                 id: Math.floor(Date.now()),
//                 title: newval.title,
//                 completed: false
//             });
//         }
//     }
// });
