// covert es5 to es6

class Profile {
  constructor(name, email, profession) {
    this.name = name;
    this.email = email;
    this.profession = profession;
  }
}

class UI {
  // Add profiles
  showProfiles({ name, email, profession }) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th scope="col">${name}</th>
    <td>${email}</td>
    <td>${profession}</td>
    <td><i class="fas fa-trash-alt" id = "delete"></i></td>
    `;
    // instantiate UI
    const ui = new UI();
    if (name === '' || email === '' || profession === '') {
      ui.showAlert('please check your input', 'danger');
    } else {
      document.querySelector('#profile-list').appendChild(tr);

      ui.showAlert('Profile added successfully', 'success');
      console.log('Profile added successfully');
    }
  }
  // clear field

  clearField() {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#profession').value = '';
  }

  // delete profile
  deleteProfile(target) {
    if (target.id === 'delete') {
      target.parentElement.parentElement.remove();
      const ui = new UI();
      ui.showAlert('Delete success', 'warning');
    }
  }

  // show alert
  showAlert(text, className) {
    const div = document.createElement('div');
    const container = document.querySelector('.container');
    const form = document.querySelector('#profile-form');
    div.className = `alert alert-${className}`;
    div.textContent = text;
    container.insertBefore(div, form);

    setTimeout(() => {
      document.querySelector('.alert').remove();
    }, 2000);
  }
}

// add event listener
document.querySelector('#profile-form').addEventListener('submit', (e) => {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const profession = document.querySelector('#profession').value;

  // instantiate
  const profile = new Profile(name, email, profession);
  const ui = new UI();
  ui.showProfiles(profile);
  ui.clearField();
  e.preventDefault();
});

// add event listener (using event bubbling)

document.querySelector('#profile-list').addEventListener('click', (e) => {
  // instantiate
  const ui = new UI();
  ui.deleteProfile(e.target);
});
