function registrationUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('mail').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Date:', date);
    console.log('Time:', time);

   function saveItems()
    {
        localStorage.setItem("name", name)
    }

}