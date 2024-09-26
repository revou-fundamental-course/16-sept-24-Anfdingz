function submitForm() {
    // Ambil nilai form
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var message = document.getElementById("message").value;

    // Validasi form
    if (name === "") {
        alert("Nama harus diisi!");
        return;
    }
    if (dob === "") {
        alert("Tanggal lahir harus diisi!");
        return;
    }
    if (gender === null) {
        alert("Jenis kelamin harus dipilih!");
        return;
    }
    if (message === "") {
        alert("Pesan harus diisi!");
        return;
    }

    // Ambil waktu saat ini
    var currentTime = new Date().toLocaleString("en-GB", { timeZone: "GMT", timeZoneName: "short" });

    // Set nilai di area kanan
    document.getElementById("submitted-time").innerText = "Current time: " + currentTime;
    document.getElementById("submitted-name").innerText = "Nama: " + name;
    document.getElementById("submitted-dob").innerText = "Tanggal Lahir: " + dob;
    document.getElementById("submitted-gender").innerText = "Jenis Kelamin: " + gender.value;
    document.getElementById("submitted-message").innerText = "Pesan: " + message;

    // Ganti nama di bagian welcome text
    document.getElementById("welcome-text").innerText = "Hi " + name + ", Welcome To Website";
}





let sections = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let heigt = sec.offsetHeight;
        let id = sec.getattributes('id')   
        
        if(top >= offset && top < offset + heigt  ) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' +id + ']').classList.add
                ('active');
            });


        };

    })
}; 


