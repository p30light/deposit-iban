"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bigInt = require('big-integer');
var BANK_CODES;
(function (BANK_CODES) {
    BANK_CODES["SEPAH"] = "015";
    BANK_CODES["RESALAT"] = "070";
    BANK_CODES["AYANDE"] = "062";
    BANK_CODES["SADERAT"] = "019";
    BANK_CODES["MELLI"] = "017";
    BANK_CODES["ANSAR"] = "063";
    BANK_CODES["PASARGAD"] = "057";
    BANK_CODES["DEY"] = "066";
    BANK_CODES["TEJARAT"] = "018";
    BANK_CODES["MELLAT"] = "012";
    BANK_CODES["EGHTESAD_NOVIN"] = "055";
    BANK_CODES["SAMAN"] = "056";
    BANK_CODES["SARMAYE"] = "058";
    BANK_CODES["SINA"] = "059";
    BANK_CODES["ETEBARI_TOVSE"] = "051";
    BANK_CODES["TOSEE_SADERAT"] = "020";
    BANK_CODES["SANAT_MADAN"] = "011";
    BANK_CODES["KAR_AFARIN"] = "053";
    BANK_CODES["KESHAVARZI"] = "016";
    BANK_CODES["IRAN_ZAMIN"] = "069";
    BANK_CODES["PARSIAN"] = "054";
    BANK_CODES["SHAHR"] = "061";
    BANK_CODES["MASKAN"] = "014";
    BANK_CODES["REFAH"] = "013";
})(BANK_CODES = exports.BANK_CODES || (exports.BANK_CODES = {}));
;
const bankCardNumberMapping = {
    '627412': BANK_CODES.EGHTESAD_NOVIN,
    '621986': BANK_CODES.SAMAN,
    '639607': BANK_CODES.SARMAYE,
    '502229': BANK_CODES.PASARGAD,
    '504172': BANK_CODES.RESALAT,
    '585983': BANK_CODES.TEJARAT,
    '603770': BANK_CODES.KESHAVARZI,
    '627488': BANK_CODES.KAR_AFARIN,
    '636214': BANK_CODES.AYANDE,
    '603769': BANK_CODES.SADERAT,
    '603799': BANK_CODES.MELLI,
    '502938': BANK_CODES.DEY,
    '627381': BANK_CODES.ANSAR,
    '505785': BANK_CODES.IRAN_ZAMIN,
    '610433': BANK_CODES.MELLAT,
    '589210': BANK_CODES.SEPAH,
    '504706': BANK_CODES.SHAHR,
    '628023': BANK_CODES.MASKAN,
    '589463': BANK_CODES.REFAH,
};
function addPadString(originalString, padString, length) {
    let newString = originalString;
    while (newString.length < length) {
        newString = padString + newString;
    }
    return newString;
}
exports.addPadString = addPadString;
function generateBbanForStandardDepositNumbers(deposit, bankCode) {
    return `${bankCode}${addPadString(deposit, '0', 19)}182700`;
}
exports.generateBbanForStandardDepositNumbers = generateBbanForStandardDepositNumbers;
function generateIbanFromBban(bban) {
    const checkDigitBigInt = bigInt(bban);
    const checkDigitNumber = 98 - checkDigitBigInt.mod(bigInt('97'));
    const checkDigit = addPadString(checkDigitNumber.toString(), '0', 2);
    return `IR${checkDigit}0${bban.substring(0, bban.length - 6)}`;
}
exports.generateIbanFromBban = generateIbanFromBban;
function isValidIban(iban) {
    if ((!iban.startsWith('IR') && !iban.startsWith('ir')) || iban.length != 26 ||
        !Number(iban.substring(2, 26)))
        return false;
    const checkSum = iban.substring(2, 4);
    const bban = `${iban.substring(5, iban.length)}182700`;
    const checkDigitBigInt = bigInt(bban);
    let checkDigitNumber = String(98 - checkDigitBigInt.mod(bigInt('97')));
    checkDigitNumber = addPadString(checkDigitNumber, '0', 2);
    return checkDigitNumber === checkSum;
}
exports.isValidIban = isValidIban;
function removeFirstZeroes(data) {
    let returnData = data;
    while (returnData.startsWith('0')) {
        returnData = returnData.substring(1);
    }
    return returnData;
}
exports.removeFirstZeroes = removeFirstZeroes;
function getBankCodeFromCardNumber(cardNumber) {
    if (cardNumber.length < 6) {
        throw new Error('Invalid cardNumber prefix length (at least should be 6 digit)');
    }
    const bankCode = bankCardNumberMapping[cardNumber.substr(0, 6)];
    if (!bankCode) {
        throw new Error('BankCode for this cardNumber not found');
    }
    return bankCode;
}
exports.getBankCodeFromCardNumber = getBankCodeFromCardNumber;
function checkIbanSourceBank(iban, bankCode) {
    return Boolean(bankCode === iban.substring(4, 7));
}
exports.checkIbanSourceBank = checkIbanSourceBank;
