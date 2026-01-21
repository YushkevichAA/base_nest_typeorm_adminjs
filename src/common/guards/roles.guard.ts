import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './../enums';
import { Request } from 'express';

const matchRoles = (roles: Role[], user_role: Role) => {
  roles.some((role) => user_role.includes(role));
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles: Role[] = this.reflector.get<Role>(
      'roles',
      context.getHandler(),
    );
    if (!roles) {
      return true;
    }
    const request: Request = context.switchToHttp().getRequest();
    const user = request.user as Role;
    return matchRoles(roles, user.roles);
  }
}
