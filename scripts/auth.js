// Signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', evt => {
  evt.preventDefault();

  // Get info from form
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;

  // Sign up user (Note: Firebase method is async and returns a promise)
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});
