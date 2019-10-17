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

  auth.signOut().then(() => {
    console.log('User signed out');
  });
});
