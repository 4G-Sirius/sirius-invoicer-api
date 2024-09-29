import { ApiProperty } from '@nestjs/swagger';

export class UploadContractImageDto {
  @ApiProperty({ items: { format: 'binary', type: 'string' }, type: 'array' })
  images: Express.Multer.File[];

  @ApiProperty({
    type: 'string',
    example: `We are 2 parties that need to arrange an invoice.
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

And Later output it in the following JSON  format, you you don't find the info put it as null
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
  fromName [Contractor company Name (Nume Companie Prestator, Sponosor Company Name]: string;   
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
  toName [(Nume Companie Beneficiar (Beneficiary's Company Name, usually starts or ends with SRL but not always))]: string; 
  toPhone: string;
  total: number;
  urlHash: string;
  userId: number;`,
  })
  promptText: string;
}

export class UploadContractPdfDto {
  @ApiProperty({ items: { format: 'binary', type: 'string' }, type: 'array' })
  pdfs: Express.Multer.File[];

  @ApiProperty({
    type: 'string',
    example: `We are 2 parties that need to arrange an invoice.
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

And Later output it in the following JSON  format, you you don't find the info put it as null
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
  userId: number;`,
  })
  promptText: string;
}
