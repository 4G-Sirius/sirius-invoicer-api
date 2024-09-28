import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class OCRService {
  constructor() {}

  async extractText({ image }: { image: string }): Promise<any> {
    console.log(image);
    try {
      const response = await axios.request({
        method: 'POST',
        url: 'http://172.22.100.137:2000/ocr',
        data: {
          image_url: image,
          secret_key: 'easyocr_vdt',
        },
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data;
    } catch (e) {
      console.log('error', e);
      throw e;
    }
  }
}
