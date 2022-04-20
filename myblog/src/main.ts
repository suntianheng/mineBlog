import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('myblog')
    .setDescription(`
<h2 align="center">将进酒</h2>
<h6 align="center">[唐]李白</h6>
<h4 align="center">君不见黄河之水天上来，奔流到海不复回。</h4>
<h4 align="center">君不见高堂明镜悲白发，朝如青丝暮成雪。</h4>
<h4 align="center">人生得意须尽欢，莫使金樽空对月。</h4>
<h4 align="center">天生我材必有用，千金散尽还复来。</h4>
<h4 align="center">烹羊宰牛且为乐，会须一饮三百杯。</h4>
<h4 align="center">岑夫子，丹丘生，将进酒，杯莫停。</h4>
<h4 align="center">与君歌一曲，请君为我倾耳听。</h4>
<h4 align="center">钟鼓馔玉不足贵，但愿长醉不复醒。</h4>
<h4 align="center">古来圣贤皆寂寞，惟有饮者留其名。</h4>
<h4 align="center">陈王昔时宴平乐，斗酒十千恣欢谑。</h4>
<h4 align="center">主人何为言少钱，径须沽取对君酌。</h4>
<h4 align="center">五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。</h4>
    `)
    .setVersion('1.0')
    .build();

  //要下载文件导航到http://localhost:3000/api-json
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
