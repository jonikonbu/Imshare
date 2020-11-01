import {db} from '../../firebase'

//投稿写真削除
export const deleteImg = (postId,uid) =>{
    const userRef = db.collection('users').doc(uid)
       userRef.collection('bookMark').doc(postId).delete()
       userRef.collection('posts').doc(postId).delete()
          .then(()=>{
            const postRef = db.collection('posts').doc(postId)
               postRef.collection('bookMark').get().then((snap)=>{
                 snap.forEach((doc)=>{
                    postRef.collection('bookMark').doc(doc.id).delete()
                })
               })
               postRef.collection('like').get().then((snap)=>{
                   snap.forEach((doc)=>{
                       postRef.collection('like').doc(doc.id).delete()
                   })
               })
               postRef.collection('comment').get().then((snap)=>{
                   snap.forEach((doc)=>{
                       postRef.collection('comment').doc(doc.id).delete()
                   })
               })
          })
            .then(()=>{
                db.collection('posts').doc(postId).delete()
                .then(()=>{
                  alert('削除しました。')
                })
                .then(()=>{
                  location.reload();
                })
            })
}
//名前変更
export const userNameChange = (name,uid) =>{
    if(name){
        db.collection('users').doc(uid).update({
          name:name
        })
          .then(()=>{
            alert('名前を変更しました。')
            location.reload();
          })
      }else{
        alert('名前を入力して下さい')
      }
}
