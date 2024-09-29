import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LLMService {
  constructor() {}

  async extractData(text: string, promptText: string) {
    console.log(text);
    const config = {
      method: 'POST',
      url: `http://172.22.100.137:11434/api/generate`,
      data: {
        model: 'llama3.2',
        steam: false,
        prompt: `
        Study the text I send: ${text}.
     You are a robot that only outputs JSON code and If you don't find the appropriate information - you put it as null without making assumptions or improvisations.
You reply in the following JSON format:


{
  additionalInfo: string;
  balance_due: number;
  beneficiaryBankDetails: string;
  beneficiaryCompanyName: string;
  beneficiaryAdministratorName: string;
  beneficiaryCompanyIBAN: string;
  beneficiaryCompanyTaxCode: string;
  beneficiaryCompanyBIC: string;
  contractorBankDetails: string;
  contractorCompanyName: string;
  contractorAdministratorName: string;
  contractorCompanyIBAN: string;
  contractorCompanyTaxCode: string;
  contractorCompanyBIC: string;
  contractId: number;
  currencySymbol: string;
  discount: number;
  docId: string;
  dueDate: string;
  creationDate: string;
  fromEmail: string;
  fromName: string;
  isExpense: false;
  issueDate: string;
  languageCode: string;
  logo: string;
  paidAmount: number;
  paidDate: string;
  PONumber: string;
  services: string;
  subtotal: number;
  tax: number;
  toAddress: string;
  toEmail: string;
  toName: string;
  toPhone: string;
  total: number;
  urlHash: string;
  userId: number;
}



What information will the invoice of this contract made by two parties contain based on the JSON Format I gave you earlier and this main information I will ask you to find?
}
`,
        stream: false,
      },
    };

    const request = await axios.request(config);
    console.log(request.data.response);
    const response = JSON.parse(request.data.response);
    console.log(response);
    // return {
    //   contractorCompanyName: 'HumaneHikingSRL',
    //   contractorAdministratorName: 'DerevenciucDoina',
    //   contractorCompanyIBAN: null,
    //   contractorCompanyTaxCode: '1024600063161',
    //   contractorCompanyBIC: null,
    //   beneficiaryCompanyName: 'CASAMINUNES.R.L.',
    //   beneficiaryAdministratorName: 'RenataUngureanu',
    //   beneficiaryCompanyIBAN: 'MD50AG000000022586006877',
    //   beneficiaryCompanyTaxCode: '1024600022517',
    //   beneficiaryCompanyBIC: null,
    //   paymentDetails: { Valuta: 'MDL' },
    //   itemisedListOfGoodsOrServices: [
    //     'Dessert',
    //     'TrueDessert',
    //     'Dammex',
    //     'Terra',
    //   ],
    //   invoiceDate: null,
    //   subtotal: 24000,
    //   taxesFeesAndDiscounts: {
    //     'condițiile de plată': 0,
    //     'sumă obligatorie plataască plătește': 24000,
    //   },
    //   totalAmountDue: 24000,
    // };

    const provider = {
      name:
        response.contractorCompanyName ||
        response.contractor_company_Name ||
        '',
      administrator:
        response.contractorAdministratorName ||
        response.contractor_administrator_Name ||
        '',
      iban: response.contractorCompanyIBAN || response.contractor_IBAN || '',
      idno:
        response.contractorCompanyTaxCode || response.contractor_Tax_Code || '',
      bic: response.contractorCompanyBIC || '',
    };

    const beneficiary = {
      name: response.beneficiaryCompanyName || '',
      administrator: response.beneficiaryAdministratorName || '',
      iban:
        response.beneficiaryCompanyIBAN ||
        response.beneficiaryBankDetails ||
        '',
      idno: response.beneficiaryCompanyTaxCode || '',
      bic: response.beneficiaryCompanyBIC || '',
    };

    const payments = {
      total: response.totalAmountDue,
      subtotal: response.subtotal || response.balance_due,
      tax: response.tax,
      currency: response.currencySymbol || response?.paymentDetails?.Valuta,
    };

    const dates = {
      issueDate: response.issueDate,
      dueDate: response.dueDate,
    };

    const service = {
      name: response.services,
      quantity: 1,
      um: 'pcs',
      price: payments.total || payments.subtotal || 0,
      tva: 0,
    };

    return {
      provider,
      beneficiary,
      payments,
      dates,
      service,
    };
    // return {
    //   additionalInfo: response.additionalInfo || '',
    //   balance_due: response.balance_due || 0,
    //   bankDetails: response.bankDetails || '',
    //   companyPromoInfoEmail: response.companyPromoInfoEmail || '',
    //   companyPromoInfoPhone: response.companyPromoInfoPhone || '',
    //   companyPromoInfoWebPage: response.companyPromoInfoWebPage || '',
    //   contractId: response.contractId || 0,
    //   currencySymbol: response.currencySymbol || '',
    //   discount: response.discount || 0,
    //   docId: response.docId || '',
    //   dueDate: response.dueDate || '',
    //   fromEmail: response.fromEmail || '',
    //   fromName: response.fromName || '',
    //   isExpense: response.isExpense || false,
    //   issueDate: response.issueDate || '',
    //   languageCode: response.languageCode || '',
    //   logo: response.logo || '',
    //   paidAmount: response.paidAmount || 0,
    //   paidDate: response.paidDate || '',
    //   PONumber: response.PONumber || '',
    //   services: response.services || '',
    //   subtotal: response.subtotal || 0,
    //   tax: response.tax || 0,
    //   toAddress: response.toAddress || '',
    //   toEmail: response.toEmail || '',
    //   toName: response.toName || '',
    //   toPhone: response.toPhone || '',
    //   total: response.total || 0,
    //   urlHash: response.urlHash || '',
    //   userId: response.userId || 0,
    // };
  }
}
