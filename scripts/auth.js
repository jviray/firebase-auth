// Listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    console.log('User logged in: ', user);
  } else {
    console.log('User logged out');
  }
});

// Signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', evt => {
  evt.preventDefault();

  // Get info from form
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // Sign up user (Note: Firebase method is async and returns a promise)
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

// Logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', evt => {
  evt.preventDefault();

  auth.signOut();
});

// Login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', evt => {
  evt.preventDefault();

  // Get info from form
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});
