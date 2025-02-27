import { Module } from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';

@Module({
  providers: [CloudinaryService],
  exports: [CloudinaryService], // Exportez le service pour qu'il soit disponible dans d'autres modules
})
export class CloudinaryModule {}