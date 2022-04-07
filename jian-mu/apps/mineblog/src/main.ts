import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console
  });

  app.use(helmet());

  const config = new DocumentBuilder()
    .setTitle('mineBlog')
    .setDescription('mineBlog api')
    .setVersion('1.0')
    .build();

  //要下载文件导航到http://localhost:3000/api-json
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();
