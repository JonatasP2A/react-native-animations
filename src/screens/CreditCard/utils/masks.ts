function maskCardValidate(text: string) {
  text = text.replace(/\D/g, '');
  text = text.replace(/^(\d{2})(\d)/, '$1/$2');
  return text;
}

function maskCardNumber(text: string) {
  text = text.replace(/\D/g, '');
  text = text.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/g, '$1 $2 $3 $4');
  return text;
}

export { maskCardValidate, maskCardNumber };
