import { AbstractBank } from 'deposit-iban/dist/banks/AbstractBank';
export declare class Refah extends AbstractBank {
    bankCode: string;
    constructor(bankCode: string);
    convertDepositToIban(deposit: string): string;
    isIbanFromThisBank(iban: string): boolean;
    convertIbanToDeposit(deposit: string): string;
}
