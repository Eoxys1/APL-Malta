document.getElementById('student-login-btn').addEventListener('click', function() {
    showPopup();
});

document.getElementById('teacher-login-btn').addEventListener('click', function() {
    showPopup();
});

document.getElementById('close-popup').addEventListener('click', function() {
    closePopup();
});

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.getElementById('loginBtn').addEventListener('click', function() {
    if (document.getElementById('email').value === "" || document.getElementById('password').value === "") {
        alert("Please fill in all fields.");
        return;
    }
    else {
        window.location.href = "/student/index.html"; // Redirect to student login page
    }
}
);

// Optional: Handling the form submission if needed
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you can handle the form submission (e.g., send the data somewhere)
    console.log('Email:', document.getElementById('email').value);
    console.log('Password:', document.getElementById('password').value);
    closePopup(); // Close the popup after submission
});
