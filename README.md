# Bookshelves

This app lists the books in a library built with Angular that interacts with a Firebase backend server for authentication, data and file management including CRUD operations, authentication, routing…

##How it works

To use this project, you must first indicate your Firebase token.
In my case, I chose to define it in `app.component.ts`.
Example:


 ```diff
   apiKey: "your apiKey ",
   authDomain: "your authDomain",
   projectId: "your projectId ",
   storageBucket: "your storageBucket",
   messagingSenderId: "your messagingSenderId ",
   appId: "yourappId "
 ```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload.
