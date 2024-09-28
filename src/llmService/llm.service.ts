import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { SiriusContract } from 'src/contract/entities/contract.entity';

@Injectable()
export class LLMService {
  constructor() {}

  async extractData(text: string): Promise<SiriusContract> {
    console.log(text);
    const config = {
      method: 'POST',
      url: `http://172.22.100.137:11434/api/generate`,
      data: {
        model: 'llama3.2',
        steam: false,
        prompt: `we need to invoice a client.
study the document.
you have to find:
the language of the document,  
the type of the document,
the number of the document,
bank details,
 user information, first and last name
 company.

example (there might be more informatio nthan in this example ):

if there is no data put null

${text}

that's the format of the output I need:
{
additionalInfo: string;
  balance_due: number;
  bankDetails: string;
  companyPromoInfoEmail: string;
  companyPromoInfoPhone: string;
  companyPromoInfoWebPage: string;
  contractId: number;
  currencySymbol: string;
  discount: number;
  docId: string;
  dueDate: string;
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
}`,
        stream: false,
      },
    };

    const request = await axios.request(config);
    console.log(request);
    const response: SiriusContract = {
      additionalInfo: '',
      balance_due: 0,
      bankDetails: '',
      companyPromoInfoEmail: '',
      companyPromoInfoPhone: '',
      companyPromoInfoWebPage: '',
      contractId: 0,
      currencySymbol: '',
      discount: 0,
      docId: '',
      dueDate: '',
      fromEmail: '',
      fromName: '',
      isExpense: false,
      issueDate: '',
      languageCode: '',
      logo: '',
      paidAmount: 0,
      paidDate: '',
      PONumber: '',
      services: '',
      subtotal: 0,
      tax: 0,
      toAddress: '',
      toEmail: '',
      toName: '',
      toPhone: '',
      total: 0,
      urlHash: '',
      userId: 0,
    };

    return {
      additionalInfo: response.additionalInfo || '',
      balance_due: response.balance_due || 0,
      bankDetails: response.bankDetails || '',
      companyPromoInfoEmail: response.companyPromoInfoEmail || '',
      companyPromoInfoPhone: response.companyPromoInfoPhone || '',
      companyPromoInfoWebPage: response.companyPromoInfoWebPage || '',
      contractId: response.contractId || 0,
      currencySymbol: response.currencySymbol || '',
      discount: response.discount || 0,
      docId: response.docId || '',
      dueDate: response.dueDate || '',
      fromEmail: response.fromEmail || '',
      fromName: response.fromName || '',
      isExpense: response.isExpense || false,
      issueDate: response.issueDate || '',
      languageCode: response.languageCode || '',
      logo: response.logo || '',
      paidAmount: response.paidAmount || 0,
      paidDate: response.paidDate || '',
      PONumber: response.PONumber || '',
      services: response.services || '',
      subtotal: response.subtotal || 0,
      tax: response.tax || 0,
      toAddress: response.toAddress || '',
      toEmail: response.toEmail || '',
      toName: response.toName || '',
      toPhone: response.toPhone || '',
      total: response.total || 0,
      urlHash: response.urlHash || '',
      userId: response.userId || 0,
    };
  }
}
