import store from '../../store/index'
import {auth,db} from '../../firebase'



//新規登録処理
export const signIn = (signInEmail,signInPassword,signInName) =>{
    auth
    .createUserWithEmailAndPassword(signInEmail,signInPassword)
      //firestore用オブジェクト  
      .then(()=>{
        const uid = auth.currentUser.uid
        const userData = {
            name:signInName,
            email:signInEmail,
        }
        //firestoreへユーザー情報を保管
        const userCl = db.collection('users').doc(uid)
            userCl.set(userData)    
        })
      //不備があった場合のエラー
      .catch(error =>{
          alert('エラー！',error.message);
          console.error('アカウント再登録エラー',error.message);
      })
}

//ログイン処理
export const logIn = (email,password) =>{
    store.dispatch('login',{email:email,password:password})
        .then(()=>{
            alert("ログインしました。")
    })
    //ログイン権限がない場合はここでエラーのアラート
    .catch(()=>{
        alert('Eメール又はパスワードが間違っています');
    })
}
//ログアウト処理
export const logOut = () =>{
    auth.signOut()
        .then(()=>{
            alert('ログアウトしました')
            store.dispatch('logOut')
        })
   
  }

