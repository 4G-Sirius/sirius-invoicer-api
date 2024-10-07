import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OCRService {
  constructor() {}

  async extractText({ image }: { image: any }): Promise<any> {
    try {
      console.log('image', image);
      const response = await axios.request({
        method: 'POST',
        url: 'http://localhost:2000/ocr',
        data: {
          secret_key: 'easyocr_vdt',
          image_url: image,
        },
      });
      console.log('response', response);
      return response.data;
    } catch (e) {
      console.log('error', e);
      throw e;
    }
  }
}
