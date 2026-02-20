function checkGuess() {
    // 1 سے 10 کے درمیان ایک رینڈم نمبر بنانا
    const luckyNumber = Math.floor(Math.random() * 10) + 1;
    const userInput = document.getElementById('userGuess').value;
    const message = document.getElementById('message');

    if (userInput == "") {
        message.innerHTML = "پہلے کوئی نمبر تو لکھیں! 🙄";
        message.style.color = "red";
        return;
    }

    if (parseInt(userInput) === luckyNumber) {
        message.innerHTML = "🎉 کمال کر دیا! آپ جیت گئے۔ نمبر " + luckyNumber + " ہی تھا۔";
        message.style.color = "green";
    } else {
        message.innerHTML = "❌ اوہ! غلط جواب۔ صحیح نمبر " + luckyNumber + " تھا۔ دوبارہ کوشش کریں!";
        message.style.color = "red";
    }
}
