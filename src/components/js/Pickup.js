import {fb,db} from '../../firebase'



//いいねボタン追加
export const addLike = (postId,uid) => {
    const addRef = db.collection('posts').doc(postId)
          addRef.update({likeCount:fb.firestore.FieldValue.increment(1)})
            addRef.collection('like').doc(uid)
              .set({
                uid:uid,
                time:new Date
              })
}
//いいねボタン削除
export const deleteLike = (postId,uid) =>{
    const deleteRef = db.collection('posts').doc(postId)
            deleteRef.update({likeCount:fb.firestore.FieldValue.increment(-1)})
              deleteRef.collection('like').doc(uid).delete()
}
//ブックマークボタン追加
export const addBookMark = (postId,uid,url,title) => {
    const postRef = db.collection('posts').doc(postId);
          //postsのbookmarkカウンターを増やす
          postRef.update({bookMark:fb.firestore.FieldValue.increment(1)})
          //postsのサブコレクションbookMarkを追加
          postRef.collection('bookMark').doc(uid)
            .set({
              uid:uid,
              date:new Date
            })
              //usersサブコレクションbookMarkを追加
              db.collection('users').doc(uid).collection('bookMark').doc(postId)
                .set({
                  title:title,
                  imgUrl:url,
                  docId:postId,
                  uid:uid
                })
}
//ブックマークボタン削除
export const deleteBookMark = (postId,uid) => {
    const postRef = db.collection('posts').doc(postId)
          //postsのbookMarkカウンターを減らす
          postRef.update({bookMark:fb.firestore.FieldValue.increment(-1)})
          //postsのサブコレクションbookMarkを削除
          postRef.collection('bookMark').doc(uid).delete()
            //usersサブコレクションbookMarkを削除
            db.collection('users').doc(uid).collection('bookMark').doc(postId).delete()
}