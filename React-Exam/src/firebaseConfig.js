import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5CqG0DN1FJ05JMihKkKVdV9kCSFf76I8",
  authDomain: "final-exam-3f576.firebaseapp.com",
  databaseURL: "https://final-exam-3f576-default-rtdb.firebaseio.com",
  projectId: "final-exam-3f576",
  storageBucket: "final-exam-3f576.appspot.com",
  messagingSenderId: "126862100932",
  appId: "1:126862100932:web:f8494d6e60925df5593c91",
  measurementId: "G-XP2NSESTKT"
};

export const app = initializeApp(firebaseConfig);