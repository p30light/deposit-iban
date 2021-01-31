"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("../utils");
const utils_1 = require("../utils");
const AbstractBank_1 = require("./AbstractBank");
class Refah extends AbstractBank_1.AbstractBank {
    constructor(bankCode) {
        super(bankCode);
        this.bankCode = bankCode;
    }
    convertDepositToIban(deposit) {
        let formattedBankCode = this.bankCode;
        // @ts-ignore:
        if (formattedBankCode.startsWith('0')) {
            formattedBankCode = formattedBankCode.replace('0', '');
        }
        const bban = `${formattedBankCode}010${utils.addPadString(deposit, '0', 16)}182700`;
        return utils.generateIbanFromBban(bban);
    }
    isIbanFromThisBank(iban) {
        return this.isValidIban(iban) && utils_1.checkIbanSourceBank(iban, utils_1.BANK_CODES.MELLAT);
    }
    convertIbanToDeposit(deposit) {
        throw new Error("convertIbanToDeposit() not implemented for refah");
    }
}
exports.Refah = Refah;
