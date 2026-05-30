import { Module } from '@nestjs/common';
import { EvidenceService } from './evidence.service';
import { EvidenceController } from './evidence.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { EncryptionModule } from '../common/encryption/encryption.module';
import { AuditModule } from '../audit/audit.module';
import { FingerprintService } from './fingerprint.service';
import { TextIntakeService } from './text-intake.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, PrismaModule, EncryptionModule, AuditModule],
  controllers: [EvidenceController],
  providers: [EvidenceService, FingerprintService, TextIntakeService],
  exports: [EvidenceService, FingerprintService, TextIntakeService],
})
export class EvidenceModule {}
