function goToRandomForm(event) {
    event.preventDefault();

    const forms = [
        "https://forms.gle/z4fTYCyYgYoRmJhX7",
        "https://forms.gle/zXoHw2T9LFXxBjpy7"
    ];

    const randomForm =
        forms[Math.floor(Math.random() * forms.length)];

    window.location.href = randomForm;
}