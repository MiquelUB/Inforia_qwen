import { CreditManager, UserCredits } from '@/core/domain/CreditManager';
import { CreditRepository } from '@/infrastructure/persistence/supabase/CreditRepository';

export class CreditService {
  constructor(private creditRepository: CreditRepository) {}

  async getUserCredits(userId: string): Promise<UserCredits | null> {
    return await this.creditRepository.getUserCredits(userId);
  }

  async validateAndDeductCredits(
    userId: string, 
    actionType: 'report' | 'transcription'
  ): Promise<{ success: boolean; message?: string; userCredits?: UserCredits }> {
    try {
      const userCredits = await this.getUserCredits(userId);
      
      if (!userCredits) {
        return { 
          success: false, 
          message: 'No se encontraron créditos del usuario' 
        };
      }

      // Verificar si los créditos están agotados
      if (userCredits.creditsRemaining <= 0) {
        return { 
          success: false, 
          message: 'No tienes informes disponibles. Por favor, renueva tu suscripción.' 
        };
      }

      // Verificar si hay suficientes créditos
      const creditsNeeded = CreditManager.calculateCreditsForAction(actionType);
      if (userCredits.creditsRemaining < creditsNeeded) {
        return { 
          success: false, 
          message: No tienes suficientes informes. Necesitas  pero solo tienes  
        };
      }

      // Deducir créditos
      const updatedCredits = CreditManager.deductCredits(userCredits, actionType);
      await this.creditRepository.updateUserCredits(updatedCredits);

      return { 
        success: true, 
        userCredits: updatedCredits,
        message: 'Informe generado correctamente'
      };
    } catch (error) {
      console.error('Error en validateAndDeductCredits:', error);
      return { 
        success: false, 
        message: 'Error al procesar el informe' 
      };
    }
  }

  async resetMonthlyCredits(userId: string, packageId: string): Promise<void> {
    await this.creditRepository.resetMonthlyCredits(userId, packageId);
  }

  async getCreditAlertMessage(userCredits: UserCredits): Promise<string | null> {
    if (userCredits.creditsRemaining <= 0) {
      return '¡Has agotado tus informes! Renueva tu suscripción para continuar.';
    }
    
    if (userCredits.creditsRemaining <= userCredits.currentPackage.credits * 0.1) {
      return ¡Cuidado! Solo te quedan  informes.;
    }
    
    return null;
  }
}
