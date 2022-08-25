const qr = document.getElementById('qrcode');

document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  clearQrContainer();

  const url = document.getElementById('url').value;
  const size = document.getElementById('size').value;

  if (url === '') return;

  setTimeout(() => {
    generateQRCode(url, size);
    setTimeout(() => {
      const saveUrl = qr.querySelector('img').src;
      createSaveBtn(saveUrl);
    }, 50);
  }, 300);
});

const generateQRCode = (url, size) => {
  const qrcode = new QRCode('qrcode', {
    text: url,
    width: size,
    height: size,
  });
};

const createSaveBtn = saveUrl => {
  const saveBtn = document.createElement('a');
  saveBtn.id = 'save-link';
  saveBtn.classList = 'form__btn form__btn--save p-m';
  saveBtn.href = saveUrl;
  saveBtn.download = 'qrcode';
  saveBtn.innerHTML = 'Guardar código QR';
  document.getElementById('qr-container').appendChild(saveBtn);
};

const clearQrContainer = () => {
  qr.innerHTML = '';
  const saveBtn = document.getElementById('save-link');
  if (saveBtn) saveBtn.remove();
};
