<form
              id="mainForm"
              method="get"
              action="results.php"
            >
              <!-- Name input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="firstNameInput"
                  type="text"
                  placeholder="Enter your name..."
                />
                <label for="name">First Name</label>
                <div id="firstNameMessage" class="errorMessage">
                  A name is required.
                </div>
              </div>

              <!-- LastName input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="lastNameInput"
                  type="text"
                  placeholder="Enter your name..."
                />
                <label for="name">Last Name</label>
                <div id="lastNameMessage" class="errorMessage">
                  A last name is required.
                </div>
              </div>

              <!-- Email input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="emailInput"
                  type="email"
                  placeholder="Enter your name..."
                />
                <label for="name">Email</label>
                <div id="emailMessage" class="errorMessage"></div>
              </div>

              <!-- phone input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="phoneInput"
                  type="text"
                  placeholder="Enter your name..."
                />
                <label for="name">Phone</label>
                <div id="phoneMessage" class="errorMessage">
                  Valid phone number is required
                </div>
              </div>

              <!-- username input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="usernameInput"
                  type="text"
                  placeholder="Enter your name..."
                />
                <label for="name">Username</label>
                <div id="usernameMessage" class="errorMessage">
                  Valid username is required
                </div>
              </div>

              <!-- password input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="passwordInput"
                  type="password"
                  placeholder="Enter your name..."
                />
                <label for="name">Password</label>
                <div id="passwordMessage" class="errorMessage">
                  Valid password is required
                </div>
              </div>

              <!-- comment input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="commentInput"
                  type="textarea"
                  placeholder="Enter your name..."
                />
                <label for="name">Comment</label>
                <div id="commentMessage" class="errorMessage">
                  A comment is required
                </div>
              </div>

              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms"
                    >https://startbootstrap.com/solution/contact-forms</a
                  >
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->

              <button
                class="btn btn-primary btn-xl enabled"
                id="submitBtn"
                type="submit"
              >
                Send
              </button>

              <div class="d-none" id="messageDisplay" type="submit"></div>
            </form>