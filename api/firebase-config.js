
// /api/firebase-config.js

// 這個函數將在伺服器上執行
export default function handler(request, response) {
  // 從 Vercel 的環境變數中讀取 Firebase 設定
  const firebaseConfig = {
    apiKey: process.env.PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.PUBLIC_FIREBASE_DATABASE_URL,
    projectId: process.env.PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.PUBLIC_FIREBASE_APP_ID,
  };

  // 以 JSON 格式回傳設定，但不包含任何敏感的伺服器端金鑰
  response.status(200).json(firebaseConfig);
}
