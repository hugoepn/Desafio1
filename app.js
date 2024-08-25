const inputTextElement = document.getElementById("inputText");
const resultMessage = document.getElementById("resultMessage");
const noMessageImage = document.getElementById("noMessageImage");
const outputText = document.getElementById("outputText");
const decryptBtn = document.getElementById("decryptBtn");

function checkInput() {
	const inputText = inputTextElement.value;
	const hasInvalidChars = /[^a-z\s]/.test(inputText);

	if (inputText === "") {
		noMessageImage.style.display = "block";
		outputText.textContent =
			"Digite um texto que você deseja criptografar ou descriptografar.";
		decryptBtn.disabled = true;
	} else if (hasInvalidChars) {
		resultMessage.textContent =
			"Apenas letras minúsculas sem acentos são permitidas!";
		noMessageImage.style.display = "none";
		outputText.textContent = "";
		decryptBtn.disabled = true;
	} else {
		resultMessage.textContent = "";
		noMessageImage.style.display = "none";
		decryptBtn.disabled = false;
	}
}

function encryptText() {
	const inputText = inputTextElement.value;

	if (/^[a-z\s]*$/.test(inputText)) {
		const encryptedText = transformText(inputText, "encrypt");
		outputText.textContent = encryptedText;
		resultMessage.textContent = "Texto criptografado com sucesso!";
	} else {
		checkInput();
	}
}

function decryptText() {
	const inputText = outputText.textContent;

	if (inputText) {
		const decryptedText = transformText(inputText, "decrypt");
		outputText.textContent = decryptedText;
		resultMessage.textContent = "Texto descriptografado com sucesso!";
	} else {
		checkInput();
	}
}

function transformText(text, mode) {
	text = text.toLowerCase();
	switch (mode) {
		case "encrypt":
			return text.replace(/e|i|a|o|u/g, (match) => {
				switch (match) {
					case "e":
						return "enter";
					case "i":
						return "imes";
					case "a":
						return "ai";
					case "o":
						return "ober";
					case "u":
						return "ufat";
				}
			});
		case "decrypt":
			return text.replace(/enter|imes|ai|ober|ufat/g, (match) => {
				switch (match) {
					case "enter":
						return "e";
					case "imes":
						return "i";
					case "ai":
						return "a";
					case "ober":
						return "o";
					case "ufat":
						return "u";
				}
			});
	}
}
inputTextElement.addEventListener("input", checkInput);
