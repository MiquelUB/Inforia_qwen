import { AuthPort } from '@/core/ports/AuthPort';
import { User } from '@/core/domain/User';

export class AuthenticateUserUseCase {
  constructor(private authPort: AuthPort) {}

  async execute(): Promise<User | null> {
    // Este método sería llamado después de la autenticación
    // y devolvería el usuario autenticado
    return null;
  }
}
