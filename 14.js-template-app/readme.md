# CMS using Javascript

## website

> header

> navigation

> banner

> mid : post : aside

> Product

> footer

```
// Copy text to clipboard
function copyText() {
  const copyInput = document.getElementById('copyInput');
  copyInput.select();
  document.execCommand('copy');
}

// Paste text from clipboard
function pasteText() {
  const pasteInput = document.getElementById('copyInput');
  pasteInput.select();
  document.execCommand('paste');
  const pastedText = pasteInput.value;
  console.log('Pasted text:', pastedText);
}

// Attach event listeners to copy and paste buttons
const copyBtn = document.getElementById('copyBtn');
const pasteBtn = document.getElementById('pasteBtn');

copyBtn.addEventListener('click', copyText);
pasteBtn.addEventListener('click', pasteText);

```
