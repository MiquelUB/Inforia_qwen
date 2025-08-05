export interface CreditPackage {
  id: string;
  name: string;
  credits: number;
  price: number;
  description: string;
}

export interface UserCredits {
  userId: string;
  packageId: string;
  creditsUsed: number;
  creditsRemaining: number;
  packageExpiry: Date;
  currentPackage: CreditPackage;
}

export class CreditManager {
  static readonly PACKAGES: CreditPackage[] = [
    {
      id: 'basic',
      name: 'Básico',
      credits: 20,
      price: 29, // Paquete de Inicio
      description: 'Paquete básico con 20 informes por mes'
    },
    {
      id: 'professional',
      name: 'Profesional',
      credits: 50,
      price: 99,
      description: 'Paquete profesional con 50 informes por mes'
    },
    {
      id: 'clinic',
      name: 'Clínica',
      credits: 150,
      price: 149,
      description: 'Paquete clínica con 150 informes por mes'
    }
  ];

  static getPackageById(id: string): CreditPackage | undefined {
    return this.PACKAGES.find(pkg => pkg.id === id);
  }

  static calculateCreditsForAction(actionType: 'report' | 'transcription'): number {
    // Cada informe completo = 1 crédito
    return 1;
  }

  static isCreditAvailable(userCredits: UserCredits, actionType: 'report' | 'transcription'): boolean {
    const creditsNeeded = this.calculateCreditsForAction(actionType);
    return userCredits.creditsRemaining >= creditsNeeded;
  }

  static deductCredits(userCredits: UserCredits, actionType: 'report' | 'transcription'): UserCredits {
    const creditsNeeded = this.calculateCreditsForAction(actionType);
    
    if (userCredits.creditsRemaining < creditsNeeded) {
      throw new Error('Créditos insuficientes');
    }

    return {
      ...userCredits,
      creditsUsed: userCredits.creditsUsed + creditsNeeded,
      creditsRemaining: userCredits.creditsRemaining - creditsNeeded
    };
  }

  static getCreditWarningThreshold(packageCredits: number): number {
    return Math.floor(packageCredits * 0.1); // 10% del paquete
  }

  static isNearExpiry(userCredits: UserCredits): boolean {
    const daysUntilExpiry = Math.ceil(
      (userCredits.packageExpiry.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysUntilExpiry <= 7; // Menos de 7 días
  }
}
