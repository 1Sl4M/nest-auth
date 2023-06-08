import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { UploadsService } from './uploads.service';
import { MulterConfigService } from './multer-config.service';

@Module({
  imports: [
    MulterModule.registerAsync({
      useClass: MulterConfigService,
    }),
  ],
  providers: [UploadsService, MulterModule, MulterConfigService, Object],
  exports: [MulterModule, UploadsService, UploadsModule],
})
export class UploadsModule {}
