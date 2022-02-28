// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const firebaseConfig = {
  apiKey: "AIzaSyDSg4hkeCBgJxkp02hsehjTIEv_AuzE95M",
  authDomain: "nikolersek-firebase-5.firebaseapp.com",
  projectId: "nikolersek-firebase-5",
  storageBucket: "nikolersek-firebase-5.appspot.com",
  messagingSenderId: "1058876435802",
  appId: "1:1058876435802:web:5fad38cab33c6144d1d763"
};

export const environment = {
  production: false,
  firebaseConfig
};
