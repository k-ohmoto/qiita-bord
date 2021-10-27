import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lists: [],
        list: ''
    },
    mutations: {
        fetchDatas(state, payload) {
            state.lists = payload
        },
        updateData(state, payload) {
            state.lists = payload
        },
        matchList(state, payload) {
            state.list = payload
        },
        updateList(state, payload) {
            state.list = payload
        }
    },
    actions: {
        fetchLists({commit}) {
            const dataList = []
            firebase.firestore().collection(`posts`).orderBy('timestamp', 'desc').get().then((res) => {
                res.forEach(function (doc) {
                    dataList.push(
                        {
                            id:doc.id,
                            name: doc.data().name,
                            comment: doc.data().comment,
                        }
                        )
                })
                commit('fetchDatas', dataList)
            })
        },
        removeList({dispatch},payload) {
            firebase.firestore().collection(`posts`).doc(payload).delete().then(() => {
                dispatch('fetchLists')
            })
        },
        matchList({commit}, payload) {
            this.state.lists.forEach(list => {
                if(list.id === payload.param){
                    commit('matchList', list)
                }
            })
        },
        updateList({commit}, payload) {
            if (payload.name === '' || payload.comment === ''){
                return
            }
            firebase.firestore().collection(`posts`).doc(payload.id).update({
                name: payload.name,
                comment: payload.comment,
            }).then(() => {
                alert('変更が完了しました。')
                commit('updateList', payload)
            })
        },
    },
    modules: {},
    plugins: [createPersistedState(
        { // ストレージのキーを指定。デフォルトではvuex
            key: 'qiita-bord',

            // ストレージの種類を指定する。デフォルトではローカルストレージ
            storage: window.sessionStorage
        }
    )]
});
