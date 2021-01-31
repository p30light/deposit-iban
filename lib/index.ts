"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("./utils");
const utils_1 = require("./utils");
exports.BANK_CODES = utils_1.BANK_CODES;
const sepah_1 = require("./banks/sepah");
const mellat_1 = require("./banks/mellat");
const BankTypeOne_1 = require("./banks/BankTypeOne");
const BankTypeTwo_1 = require("./banks/BankTypeTwo");
const resalat_1 = require("./banks/resalat");
const shahr_1 = require("./banks/shahr");
const maskan_1 = require("./banks/maskan");
const refah_1 = require("./banks/refah");
const saman = new BankTypeOne_1.BankTypeOne(utils_1.BANK_CODES.SAMAN);
const sarmaye = new BankTypeOne_1.BankTypeOne(utils_1.BANK_CODES.SARMAYE);
const sina = new BankTypeOne_1.BankTypeOne(utils_1.BANK_CODES.SINA);
const eghtesadNovin = new BankTypeOne_1.BankTypeOne(utils_1.BANK_CODES.EGHTESAD_NOVIN);
const etebariTovse = new BankTypeOne_1.BankTypeOne(utils_1.BANK_CODES.ETEBARI_TOVSE);
const karafarin = new BankTypeTwo_1.BankTypeTwo(utils_1.BANK_CODES.KAR_AFARIN);
const toseeSaderat = new BankTypeTwo_1.BankTypeTwo(utils_1.BANK_CODES.TOSEE_SADERAT);
const sanatMadan = new BankTypeTwo_1.BankTypeTwo(utils_1.BANK_CODES.SANAT_MADAN);
const keshavarzi = new BankTypeTwo_1.BankTypeTwo(utils_1.BANK_CODES.KESHAVARZI);
const mellat = new mellat_1.Mellat(utils_1.BANK_CODES.MELLAT);
const sepah = new sepah_1.Sepah(utils_1.BANK_CODES.SEPAH);
const ayande = new BankTypeTwo_1.BankTypeTwo(utils_1.BANK_CODES.AYANDE);
const saderat = new BankTypeTwo_1.BankTypeTwo(utils_1.BANK_CODES.SADERAT);
const melli = new BankTypeTwo_1.BankTypeTwo(utils_1.BANK_CODES.MELLI);
const ansar = new BankTypeOne_1.BankTypeOne(utils_1.BANK_CODES.ANSAR);
const pasargad = new BankTypeOne_1.BankTypeOne(utils_1.BANK_CODES.PASARGAD);
const dey = new BankTypeTwo_1.BankTypeTwo(utils_1.BANK_CODES.DEY);
const tejarat = new BankTypeTwo_1.BankTypeTwo(utils_1.BANK_CODES.TEJARAT);
const resalat = new resalat_1.Resalat(utils_1.BANK_CODES.RESALAT);
const iranZamin = new BankTypeOne_1.BankTypeOne(utils_1.BANK_CODES.IRAN_ZAMIN);
const parsian = new BankTypeOne_1.BankTypeOne(utils_1.BANK_CODES.PARSIAN);
const shahr = new shahr_1.Shahr(utils_1.BANK_CODES.SHAHR);
const maskan = new maskan_1.Maskan(utils_1.BANK_CODES.MASKAN);
const refah = new refah_1.Refah(utils_1.BANK_CODES.REFAH);
exports.util = utils;
exports.getBankFromCode = (bankCode) => {
    switch (bankCode) {
        case utils_1.BANK_CODES.SAMAN:
            return saman;
        case utils_1.BANK_CODES.SARMAYE:
            return sarmaye;
        case utils_1.BANK_CODES.SINA:
            return sina;
        case utils_1.BANK_CODES.EGHTESAD_NOVIN:
            return eghtesadNovin;
        case utils_1.BANK_CODES.ETEBARI_TOVSE:
            return etebariTovse;
        case utils_1.BANK_CODES.KAR_AFARIN:
            return karafarin;
        case utils_1.BANK_CODES.TOSEE_SADERAT:
            return toseeSaderat;
        case utils_1.BANK_CODES.SANAT_MADAN:
            return sanatMadan;
        case utils_1.BANK_CODES.KESHAVARZI:
            return keshavarzi;
        case utils_1.BANK_CODES.MELLAT:
            return mellat;
        case utils_1.BANK_CODES.SEPAH:
            return sepah;
        case utils_1.BANK_CODES.AYANDE:
            return ayande;
        case utils_1.BANK_CODES.SADERAT:
            return saderat;
        case utils_1.BANK_CODES.MELLI:
            return melli;
        case utils_1.BANK_CODES.ANSAR:
            return ansar;
        case utils_1.BANK_CODES.PASARGAD:
            return pasargad;
        case utils_1.BANK_CODES.DEY:
            return dey;
        case utils_1.BANK_CODES.TEJARAT:
            return tejarat;
        case utils_1.BANK_CODES.RESALAT:
            return resalat;
        case utils_1.BANK_CODES.IRAN_ZAMIN:
            return iranZamin;
        case utils_1.BANK_CODES.PARSIAN:
            return parsian;
        case utils_1.BANK_CODES.SHAHR:
            return shahr;
        case utils_1.BANK_CODES.MASKAN:
            return maskan;
        case utils_1.BANK_CODES.REFAH:
            return refah;
        default:
            throw new Error(`Bank with ${bankCode} code not supported,
       check supported banks here\n https://github.com/mohammadranjbar/deposit-iban#supported-banks`);
    }
};
exports.convertIbanToDeposit = (iban) => {
    const bankCode = iban.substring(4, 7);
    const bank = exports.getBankFromCode(bankCode);
    return bank.convertIbanToDeposit(iban);
};
exports.convertDepositToIban = (bankCode, deposit) => {
    const bank = exports.getBankFromCode(bankCode);
    return bank.convertDepositToIban(deposit);
};
exports.isIbanValid = utils.isValidIban;
var utils_2 = require("./utils");
exports.getBankCodeFromCardNumber = utils_2.getBankCodeFromCardNumber;
var cardUtils_1 = require("./cardUtils");
exports.isCardValid = cardUtils_1.isCardValid;
