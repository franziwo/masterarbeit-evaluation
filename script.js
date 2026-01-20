function goToRandomForm(event) {
    event.preventDefault();

    const forms = [
        "https://forms.gle/h1uBChMK3nStkbPh8", // Group A
        "https://forms.gle/uYtE5pdw5sxCC4nA9" // Group B
    ];

    const randomForm =
        forms[Math.floor(Math.random() * forms.length)];

    window.location.href = randomForm;
}