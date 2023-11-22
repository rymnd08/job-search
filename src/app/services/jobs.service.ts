import { Injectable, signal } from '@angular/core';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../../assets/environment/environment';
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, deleteDoc, doc, updateDoc, serverTimestamp, getDocs } from 'firebase/firestore'
@Injectable({
  providedIn: 'root'
})

export class JobsService {
  private app = initializeApp(firebaseConfig)
  private provider = new GoogleAuthProvider();
  private auth = getAuth(this.app)
  private db = getFirestore(this.app)
  private collection  = signal([])

  constructor() { }

  googleSignIn(){
    return signInWithPopup(this.auth, this.provider)
  }

  createAccount(email: string, password: string){
    return createUserWithEmailAndPassword(this.auth, email, password)
  }
  
  login (email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  getCurrentUser(){
    return this.auth.currentUser
  }

  signOutUser(){
    return signOut(this.auth)// Promise
  }

  addFirestore(collectionName: string, data: object){
    return addDoc(collection(this.db, collectionName), data)
  } 

  deleteFromFireStore(collectionName: string, uid : string){
    return deleteDoc(doc(this.db, collectionName, uid))
  }

  async updateFirestore(collectName: string, id: string, data: object){
    const docRef = await doc(this.db, collectName, id)  
    const updateData = await updateDoc(docRef, data);
    return updateData
  }

  async getCollection(collectionName: string){
    try{
      const snapShot = await getDocs(collection(this.db, collectionName))
      let data: any = []
      snapShot.forEach(doc=>{
        const obj = doc.data()
        obj['uid'] = doc.id
        data.push(obj)
      })
      return data
    }catch(err){
      return err
    }
  }

  get timeStamp(){
    return serverTimestamp()
  }

  get jobsData(){
    return this.collection()
  }

  set jobsData(data: any){
    this.collection.set(data)
  }


}
