import { NestFactory } from '@nestjs/core';
import { LabelModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(LabelModule);
  await app.listen(3000);
}
bootstrap();
