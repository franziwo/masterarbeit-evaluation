function goToRandomForm(event) {
    event.preventDefault();

    const forms = [
        "https://forms.gle/X7a1KCzqzby4Ag8SA", // Group A
        "https://forms.gle/nh1QKF9Yp5aTEGjF8" // Group B
    ];

    const randomForm =
        forms[Math.floor(Math.random() * forms.length)];

    window.location.href = randomForm;
}