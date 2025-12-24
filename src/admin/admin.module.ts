import { Module } from '@nestjs/common';
import { createUserResource } from './resources/user.resource';

@Module({
  imports: [
    import('@adminjs/nestjs').then(({ AdminModule }) =>
      AdminModule.createAdminAsync({
        useFactory: () => ({
          adminJsOptions: {
            rootPath: '/admin',
            resources: [createUserResource()],
            branding: {
              companyName: 'Тестовое название',

              withMadeWithLove: false,
              logo: 'http://localhost:3000/static/logo128.png',
              favicon: 'http://localhost:3000/static/favicon.ico',
            },
          },
        }),
      }),
    ),
  ],
})
export class AdminModule {}
