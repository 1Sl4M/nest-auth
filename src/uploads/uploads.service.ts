import { Injectable } from '@nestjs/common';
import { Multer } from 'multer';
import { diskStorage } from 'multer';

@Injectable()
export class UploadsService {
  private multer: Multer;
  private storage = diskStorage({
    destination: './src/images',
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

  constructor() {
    this.multer = require('multer');
  }

  async uploadFile(file) {
    return new Promise((resolve) => {
      if (!file || !file.headers || !file.headers['content-type']) {
        resolve({ msg: 'File has been added' });
      }
      const upload = this.multer({ storage: this.storage }).single('file');
      upload(file, null, (err) => {
        if (err) {
          console.log(err);
          resolve(false);
        }
        resolve(true);
      });
    });
  }
}
