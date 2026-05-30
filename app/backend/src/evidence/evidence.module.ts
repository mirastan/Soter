import { Module } from '@nestjs/common';
import { EvidenceService } from './evidence.service';
import { EvidenceController } from './evidence.controller';
import { UploadSessionService } from './upload-session.service';
import { UploadSessionController } from './upload-session.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { EncryptionModule } from '../common/encryption/encryption.module';
import { AuditModule } from '../audit/audit.module';
import { FingerprintService } from './fingerprint.service';
import { TextIntakeService } from './text-intake.service';
import { ConfigModule } from '@nestjs/config';

@Module({
<<<<<<< HEAD
  imports: [ConfigModule, PrismaModule, EncryptionModule, AuditModule],
  controllers: [EvidenceController],
  providers: [EvidenceService, FingerprintService, TextIntakeService],
  exports: [EvidenceService, FingerprintService, TextIntakeService],
=======
  imports: [PrismaModule, EncryptionModule, AuditModule],
  controllers: [EvidenceController, UploadSessionController],
  providers: [EvidenceService, FingerprintService, UploadSessionService],
  exports: [FingerprintService],
>>>>>>> 47c3beb8c98eacf70635226208f58e06ad7bea39
})
export class EvidenceModule {}
