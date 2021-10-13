import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import firebase from "firebase"

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAOShlSSCunpoN_hwlgmN72jmQzUGbdeKg",
  authDomain: "qiita-bord.firebaseapp.com",
  projectId: "qiita-bord",
  storageBucket: "qiita-bord.appspot.com",
  messagingSenderId: "766895171067",
  appId: "1:766895171067:web:657b4326024d99b380975e"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')