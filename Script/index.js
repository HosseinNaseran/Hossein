const ContactUsForm = document.getElementById("ContactUsForm");
const NameInput = document.getElementById("NameInput");
const NumberInput = document.getElementById("NumberInput");
const EmailInput = document.getElementById("EmailInput");
const MessageInput = document.getElementById("MessageInput");

ContactUsForm.addEventListener("submit", (e) => {  

    e.preventDefault();

    const name = NameInput.value.trim();
    const number = NumberInput.value.trim();
    const email = EmailInput.value.trim();
    const message = MessageInput.value.trim();


    const nameRegex = /^[ا-ی\s , a-zA-Z\s]+$/;
    const numberRegex = /^\d{11}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) {
        alert("نام باید فقط شامل حروف و فاصله باشد.");
        return;
    }

    if (!numberRegex.test(number)) {
        alert("لطفاً یک شماره تلفن 11 رقمی معتبر وارد کنید.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("لطفاً یک ایمیل معتبر وارد کنید.");
        return;
    }
    if (message.length === 0) {
        alert("لطفاً یک پیام وارد کنید.");
        return;
    }
    alert("پیام شما با موفقیت ارسال شد!");

  

} )


