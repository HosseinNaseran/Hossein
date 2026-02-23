const ContactUsForm = document.getElementById("ContactUsForm");
const NameInput = document.getElementById("NameInput");
const NumberInput = document.getElementById("NumberInput");
const EmailInput = document.getElementById("EmailInput");
const MessageInput = document.getElementById("MessageInput");


const PUBLIC_KEY = "JcmtVYfGa1XR-NtqC";
const SERVICE_ID = "service_vq67zdg";
const TEMPLATE_ID = "template_o68hm4g";

emailjs.init({
    publicKey: PUBLIC_KEY,
});

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


    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: name,
        number: number,
        email: email,
        message: message
    })
    .then(() => {
        alert("پیام شما با موفقیت ارسال شد!");
        ContactUsForm.reset();
    })
    .catch((error) => {
        console.error(error);
        alert("خطا در ارسال پیام. لطفاً دوباره تلاش کنید.");
    });
});