interface IPasswordOptions {
  length: number;
  isLowercase: boolean;
  isUppercase: boolean;
  isNumbers: boolean;
  isSymbols: boolean;
}

function generatePassword({ 
  length, 
  isNumbers, 
  isSymbols, 
  isUppercase, 
  isLowercase 
}: IPasswordOptions) {
  const lowcaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&';

  let chars = ''
}
