const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const textElement = document.getElementById("text");

const message = `Hi love...

I’ve been thinking a lot about what I said, and gusto ko talagang mag sorry sa’yo.
Mali ako. I take full responsibility for my words.

Alam ko nasaktan kita, and I hate that I was the reason for that pain.
Wala akong excuse. Kasalanan ko talaga, and I truly regret it.

Please forgive me...
Ayokong mawala ka. You mean so much to me, Fem.

I promise I will do better, hindi lang sa salita kundi sa actions ko.
I will be more careful, more understanding, and more deserving of you.

Sana mapatawad mo ako...
I love you so much.

- Mico`;

let index = 0;

function typeWriter() {
    if (index < message.length) {
        textElement.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 35);
    }
}

openBtn.addEventListener("click", () => {
    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {
        openBtn.textContent = "Close Letter 💔";
        textElement.innerHTML = "";
        index = 0;
        typeWriter();
    } else {
        openBtn.textContent = "Open Letter 💌";
    }
});