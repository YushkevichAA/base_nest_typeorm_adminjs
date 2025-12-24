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
              companyName: 'Remote Info, pagina di demo',

              withMadeWithLove: false,
              logo: 'http://localhost:3000/logo.jpg',
              favicon: 'http://localhost:3000/favicon.png',
            },
          },
        }),
      }),
    ),
  ],
})
export class AdminModule {}
