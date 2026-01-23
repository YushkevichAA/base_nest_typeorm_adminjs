import { Module } from '@nestjs/common';
import { createUserResource } from './resources/user.resource';
import { componentLoader, Components } from './componentLoader';
import { dashboardHandler } from './pages';

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

@Module({
  imports: [
    import('@adminjs/nestjs').then(({ AdminModule }) =>
      AdminModule.createAdminAsync({
        useFactory: () => ({
          adminJsOptions: {
            // dashboard: {
            //   component: Components.Dashboard,
            //   handler: dashboardHandler,
            // },
            rootPath: '/admin',
            resources: [createUserResource()],
            componentLoader,
            branding: {
              companyName: 'Тестовое название',

              withMadeWithLove: false,
              logo: 'http://localhost:3000/static/logo128.png',
              favicon: 'http://localhost:3000/static/favicon.ico',
            },
          },
          // auth: {
          //   authenticate,
          //   cookieName: 'adminjs',
          //   cookiePassword: 'secret',
          // },
          // sessionOptions: {
          //   resave: true,
          //   saveUninitialized: true,
          //   secret: 'secret',
          // },
        }),
      }),
    ),
  ],
})
export class AdminModule {}
