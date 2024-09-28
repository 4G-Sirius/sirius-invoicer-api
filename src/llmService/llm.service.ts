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
        prompt: `
We are 2 parties that need to arrange an invoice.
Study the text I send: ${text}.
here is the information I need you to find form the text:

Contractor company Name (Nume Companie Prestator):
Contractor administrator Name (Nume Administrator Prestator):
Contractor IBAN (IBAN Prestator):
Beneficiary's Name: 
Denumire Companie (Company Name):.
Cod fiscal (Tax Code): 
BIC (Bank Code): 
IBAN (International Bank Account Number): 
Payment Details:
Nume Beneficiar (Beneficiary's Name)
Valuta (Currency): 
`,
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
