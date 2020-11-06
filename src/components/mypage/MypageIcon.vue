<template>
    <div id="mypage-icon">
        <Loading v-show="loading"/>
        <div class="myphoto">
            <ul>
                <v-img class="myphoto-img" v-show="uploadMyphoto" :src="uploadMyphoto" alt=""/>
            </ul>
            </div>
                <div class="myphoto">
                    <div v-show="!uploadMyphoto">
                        <!--アイコンを設定していない場合-->
                        <v-icon v-show="!is_myphoto" class="account-icon">mdi-account</v-icon>
                        <!--アイコンを設定している場合-->
                        <v-img v-show="is_myphoto" class="myphoto-img" :src="user.myphoto"></v-img>
                        <br>
                        <!--アイコンを設定又は変更するボタン-->
                        <label class="img-btn">
                            画像を変更
                        <input class="input" type="file" @change="onFileChange"/>
                        </label>
                    </div>
                    <div depressed v-show="uploadMyphoto" style="margin:10px;">
                        <v-btn @click="remove" color="red">
                            <span style="color:#fff; font-weight:bold;">
                                取消
                            </span>
                        </v-btn>
                        <v-btn color="#1E90FF" @click="changeMyphoto">
                            <span style="color:#fff; font-weight:bold;">変更</span>
                        </v-btn>
                        </div>
                    </div>
    </div>
</template>
<script>
    import {db,storage} from '../../firebase'
    import Loading from '../Loading'
    import {mapState} from 'vuex'

    export default{
        components:{
            Loading
        },
        data(){
            return {
                user:this.$store.state.user,

                loading:false,

                myphoto:true,

                fileName:'',
                imgDataUrl:'',
                uploadMyphoto:'',
            }
        },
        computed:{
            ...mapState({userInformation:'user'}),
             //プロフィールサムネイルが存在するか判定   
            is_myphoto(){
                if(this.userInformation.myphoto == undefined){
                    return false
                }else{
                    return true
                }
            }
        },
        methods:{
            onFileChange(e){
                const files = e.target.files || e.dataTransfer.files;
                this.createImage(files[0]);
                this.fileName = files[0].name
            },

            createImage(file){
                const reader = new FileReader();
                reader.onload = e =>{
                this.uploadMyphoto = e.target.result;
                };
                reader.readAsDataURL(file);
                reader.onloadend = (e) =>{
                this.imgDataUrl = e.target.result
                }
            },

            //選択したファイルの削除（アップロード用）
            remove(){
                this.uploadMyphoto = false
            },
            changeMyphoto(){
                //ローディング画面の表示
                this.loading = true

                const uid = this.$store.state.userUid.uid;
                const imgDataUrl = this.imgDataUrl;
                const name = this.fileName;
                //ストレージのリファレンス
                const storageRef = storage.child(`myphoto/${uid}/${name}`);
                    //ストレージにbase64で画像を保管
                    storageRef.putString(imgDataUrl,'data_url')
                    //ストレージで保存した画像からファイルのURLを取得
                    .then(()=>{
                        storageRef.getDownloadURL()
                        .then((url)=>{
                            //firestoreのusersにマイページアイコンを差し替え
                            db.collection('users').doc(uid).set({
                                myphoto:url
                            },{merge:true})
                                .then(()=>{
                                    //処理終了後にローディング、アラート、リロードの順番で処理
                                    this.loading = false;
                                    alert('変更が完了しました。')
                                })
                                .then(()=>{ 
                                    location.reload();
                                })    
                        })
                    })
            }
        }
    }

</script>
<style lang="scss" scoped>
    .myphoto{
           text-align: center; 
        .account-icon{
            font-size:250px;
        }
        .myphoto-img{
            border-radius:45%;
            width:100%;
            height:400px;
        }
    }
    .img-btn > .input{
        display: none;
    }
    .img-btn{
        font-size:14px;
        padding:10px;
        border-radius:5px ;
        color:#fff;
        background-color:#1E90FF;
        font-weight:bold;
    }
</style>