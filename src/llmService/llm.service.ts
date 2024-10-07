import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LLMService {
  constructor() {}

  async extractData(text: string, promptText: string) {
    console.log(text);

    const config = {
      method: 'POST',
      url: `http://localhost:11434/api/generate`,
      data: {
        model: 'llama3.2:1b',
        steam: false,
        prompt: ` Contract nr. _1_ din data_29.08.2024_ I. PĂRŢILE CONTRACTANTE
I.1. Humane Hiking SRL, denumită în continuare "Prestator" în persoana administratorului Derevenciuc Doina, pe de o parte și CASA MINUNE SRL, în persoana dnei Renata Ungureanu în continuare ”Beneficiar” au încheiat prezentul contract convenind asupra următoarelor:
II. OBIECTUL CONTRACTULUI
II.1. Obiectul contractului îl constituie prestarea de servicii de web development. Detalierea serviciului prestat este indicată în anexa nr.1.
III. DURATA CONTRACTULUI
III.1. Prezentul contract se încheie pe o durată de o lună calendaristică.
IV. PREŢUL CONTRACTULUI
V. OBLIGAŢIILE PRESTATORULUI
V.1. Să asigure serviciul prevăzut în anexa nr.1, în termenii stabiliți de comun acord cu Beneficiarul final.
V.2. Prestatorul are obligația de a trimite pentru aprobare Beneficiarului calculul cu privire la cheltuielile adiționale, apărute pe parcursul perioadei contractului, în prealabil.
V.3. Să prezinte documente contabile justificative conform reglementărilor legale în vigoare, aferente cheltuielile adiționale.
V.4. Să respecte și să acționeze în consecință cu reglementările legale în vigoare în îndeplinirea obligațiilor din prezentul contract.
VI. OBLIGAŢIILE BENEFICIARULUI
VI.1. Să plătească suma convenită la pct. 4.1. în termenul prevăzut la pct. 4.3. din prezentul contract.
VI.2. Să confirme în formă scrisă sau electronică, aprobarea cheltuielilor adiționale.
VI.3. Să suporte cheltuielile adiționale făcute de către Prestator pentru a-şi îndeplini
obligaţiile prevăzute de prezentul contract.
VII. OBLIGAŢIA DE CONFIDENŢIALITATE A PRESTATORULUI
VII.1. Prestatorul se obligă să păstreze confidențialitatea informaţiilor, datelor şi documentelor referitoare la situaţia juridică și economică a beneficiarului, pe care
 IV.1. Beneficiarul se obligă să plătească în schimbul serviciilor prestate, suma de
 24.000 MDL.
 IV.2. Plata se efectuează prin virament.
 IV.3. Suma deplină a contractului se achită în două tranșe, una de 50% în termen de
 30 zile calendaristice din data semnării contractului, și cea de a doua tranșă în
 termen de 30 zile calendaristice din data semnării actului de primire-predare.

 le obține ca efect al executării contractului de prestări servicii cu Beneficiarul, pe
durata valabilităţii acestuia.
VII.2. Prestatorul poate dezvălui informaţii sau date, ori poate pune la dispoziţie
documente dintre cele menţionate mai sus doar persoanelor pentru care a primit aprobare în acest sens în scris de la administratorul societăţii beneficiare.
VIII. RĂSPUNDEREA CONTRACTUALĂ
8.1 Nerespectarea termenului de plată indicat în pct. 4.3, din partea Beneficiarului, atrage răspunderea contractuală, acesta urmând să plătească 0,1% din suma restantă pentru fiece zi de întîrziere.
IX. REZILIEREA CONTRACTULUI
IX.1. Rezilierea unilaterală a prezentului contract se poate face de către oricare dintre părţi, din motive ce nu pot fi considerate forţă majoră, printr-un preaviz acordat celeilalte părţi cu minim 5 zile înainte. Pentru beneficiar nerespectarea acestei clauze, implică achitarea contravalorii serviciilor prestate.
IX.2. În cazul rezilierii unilaterale a prezentului contract de oricare dintre părți, cu respectarea clauzei indicate la pct.10.1., Prestatorul este în drept la reținerea a 50% din suma contractului.
X. FORŢA MAJORĂ
X.1. Nici una dintre părţile contractante nu răspunde de neexecutarea la termen sau/şi de executarea în mod necorespunzător a prevederilor prezentului contract, dacă aceasta fost cauzată de forţa majoră, aşa cum este ea definită de lege.
X.2. Partea care invocă forţa majoră este obligată să notifice celeilalte părţi.
XI. NOTIFICĂRI
XI.1. Orice notificare adresată de una dintre părțile contractului, va fi transmisă la adresa electronică prevăzută în partea finală.
XI.2. Notificările verbale nu se iau în considerare, dacă nu sunt confirmate conform punctului de mai sus.
XII. LITIGII
XII.1. Părţile au convenit ca toate neînţelegerile privind clauzele prezentului contract să fie rezolvate pe cale amiabilă de către reprezentanţii lor, prin conciliere directă.
XII.2. În cazul în care nu este posibilă rezolvarea litigiilor pe cale amiabilă, părţile se vor adresa instanţelor judecătoreşti competente din municipiul Chișinău.

 XIII. CLAUZE FINALE
XIII.1. Modificareasaucompletareaprezentuluicontractsefacedoarprinanexă.
XIII.2. Niciunadintrepărţinupoatetransmiteunuiterţdrepturilesauobligaţiileasumate
prin prezentul contract.
XIII.3. Părțilecontractanteîșipăstreazădreptuldeainformacealaltăparte,despre
nerespectarea obligațiilor.
XIII.4. Prezentulcontractreprezintăvoinţapărţilorşiînlăturăoricealtăînţelegeredintre
acestea anterioară încheierii lui.
XIII.5. Prezentulcontractesteîntocmitîndouăexemplareoriginale,câteunulpentru
fiecare Parte, având aceiași putere juridică.
XIII.6. PrezentulcontractintrăînvigoaredinmomentulsemnăriideambelePărțile.
Prestator
Denumire Companie: Humane Hiking S.R.L. Cod fiscal: 1024600063161
IBAN: MD51AG000000022586220841
BIC: AGRNMD2X
Valuta: MDL
Nume Administrator: Derevenciuc Doina
Data: 29.08.2024 Semnatura:
Beneficiar
Denumire companie: CASA MINUNE S.R.L. Cod fiscal: 1024600022517
BIC: AGRNMD2X
IBAN: MD50AG000000022586006877
BIC: AGRNMD2X
Valuta: MDL
Nume Beneficiar: Renata Ungureanu
Data: 29.08.2024 Semnatura:

 Anexa nr.1 la Contractul nr. _2_ din data__28.09.2024__ Condiții specifice de prestare a serviciului
1. Lista de servicii și preț total:
Servicii de web development pentru următoarele brandurii: Ambera, True Dessert, Dammex, Terra Bianca.
2. Condițiile de plată.
Beneficiarul se obligă să plătească în schimbul serviciilor prestate, suma de 24.000 MDL. Suma deplină a contractului se achită în două tranșe, una de 50% în termen de 30 zile calendaristice din data semnării contractului, și cea de a doua tranșă în termen de 30 zile calendaristice din data semnării actului de primire-predare.
3. Termenul și locul de furnizare a serviciului.
Fiecare serviciu va fi furnizat conform listei primite de la Beneficiar. Locul de furnizare va fi stabilit individual cu fiecare persoană din listă. Serviciile se așteaptă a fi livrate până la data de 30 septembrie 2024. Orice schimbări se vor discuta în prealabil.
    
 Prestator
Denumire Companie: Humane Hiking SRL Cod fiscal: 1024600063161
IBAN: MD51AG000000022586220841 BIC: AGRNMD2X
Valuta: MDL
Nume Administrator: Derevenciuc Doina
Data: 29.08.2024 Semnatura:
Beneficiar
Denumire companie: CASA MINUNE S.R.L. Cod fiscal: 1024600022517
BIC: AGRNMD2X
IBAN: MD50AG000000022586006877
BIC: AGRNMD2X
Valuta: MDL
Nume Beneficiar: Renata Ungureanu
Data: 29.08.2024 Semnatura:
Anexă nr.2 la Contractul nr. __2__din data_29.08.2024_ Act de predare-primire
Lista operelor create de către Prestator poate fi consultată la link-ul ce urmează:
Suma totală spre achitare e de 24,000.00 MDL.

 Prestator
Denumire Companie: Humane Hiking SRL Cod fiscal: 1024600063161
IBAN: MD51AG000000022586220841 BIC: AGRNMD2X
Valuta: MDL
Nume Administrator: Derevenciuc Doina
Data: 29.08.2024 Semnatura:
Beneficiar
Denumire companie: CASA MINUNE S.R.L. Cod fiscal: 1024600022517
BIC: AGRNMD2X
IBAN: MD50AG000000022586006877 Valuta: MDL
Nume Beneficiar: Renata Ungureanu
Data: 29.08.2024 Semnatura:
.
Please study the text above and fill the object bellow with the data extracted from the text.
Please send just the json without any other text.

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
