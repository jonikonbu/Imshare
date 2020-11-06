import Vue from 'vue'
import Vuex from 'vuex'
import {auth,db} from '../firebase'



Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,

  state: {
    //ui保管
    userUid:{
      uid:'',
    },
    //user情報オブジェクト保管
    user:{
      name:'',
      email:'',
      myphoto:''
  },
    //user状態の表示  
    login:false,
    
  },
  getters:{
    uid: state =>{
      return state.userUid.uid
    },
    user: state =>{
      return state.user
    }
  },
 actions:{
   //ログイン保持
   autoLogin({commit}){
    auth.onAuthStateChanged((user) => {
      if (user) {
        //リロードの際のuidの維持
        commit('setUid',{uid:user.uid})
        //リロードの際の再ログイン状態の確認。
        commit('switchLogin')
         
        //firestoreのユーザー情報をstateに保持
        const userRef = db.collection('users').doc(user.uid)
          userRef.get().then((doc)=>{
            if(doc.exists){
              const userData = doc.data()
                return commit('setUser',{name:userData.name, email:userData.email,myphoto:userData.myphoto})
            }
          })
      }
    })
   },
    //ログイン時の処理
  login({ commit }, payload) {
      auth.signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          console.log(user)
            auth.onAuthStateChanged((user) => {
              if (user) {
                //ログイン時のuidの取得
                commit('setUid',{uid:user.uid})
                // ユーザー状態の切替
                commit('switchLogin')

                //firestoreのユーザー情報をstateへ渡す。
                const userRef = db.collection('users').doc(user.uid)
                  userRef.get().then((doc)=>{
                    if(doc.exists){
                      const userData = doc.data()
                      return commit('setUser',{name:userData.name, email:userData.email,myphoto:userData.myphoto})
                    }
                  })
              }
            })
         }).catch(() => {
            alert('Eメール又はパスワードが間違っています')
          })
    },
    logOut(){
        this.commit('logOutSwitch')
    }
    },
   
  mutations: {
    //uid
    setUid(state,payload){
      state.userUid.uid = payload.uid
    },
    //ログイン時
    switchLogin(state){
      state.login = true
    },
    //ログアウト時
    logOutSwitch(state){
      state.login = false
    },
    //ログイン時ユーザー情報
    setUser(state,payload){
      state.user.name = payload.name
      state.user.email = payload.email
      state.user.myphoto = payload.myphoto
    },
    setMyphoto(state,url){
      console.log(url)
      state.user.myphoto = url
    }
    
  },
  modules: {
  }
})
