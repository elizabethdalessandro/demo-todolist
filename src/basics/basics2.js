

function setFirstName(value, name) {
    value.firstName = name;
}

let x = {
    firstName: 'Jane'
};

setFirstName(x, 'Joe');

x.firstName



function addContact(contacts, name) {
    contacts.push({ firstName: name });
}

const x = 3;
x = 5; // Crashes

const contacts = [];
contacts.push(1);

contacts = [1]; // also crashes
// instead
contacts.length = 0;
contacts.push(1);