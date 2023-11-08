import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBgybHvHNIY1RRHJN51jUyacKncniAVog4",
  authDomain: "sharebite-81b83.firebaseapp.com",
  projectId: "sharebite-81b83",
  storageBucket: "sharebite-81b83.appspot.com",
  messagingSenderId: "781401531486",
  appId: "1:781401531486:web:c914656a303fe5df7b80cf",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
