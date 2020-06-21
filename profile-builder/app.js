function Profile(name, email, profession) {
  this.name = name;
  this.email = email;
  this.profession = profession;
}

function UI() {}

UI.prototype.showProfiles = function ({ name, email, profession }) {
  const tr = document.createElement('tr');
  tr.innerHTML = `
  <th scope="col">${name}</th>
  <td>${email}</td>
  <td>${profession}</td>
  <td><i class="fas fa-trash-alt"></i></td>
  `;
  if (name === '' || email === '' || profession === '') {
    console.log('please check your input');
  } else {
    document.querySelector('#profile-list').appendChild(tr);
  }
};

UI.prototype.clearField = function () {
  document.querySelector('#name').value = '';
  document.querySelector('#email').value = '';
  document.querySelector('#profession').value = '';
};

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
