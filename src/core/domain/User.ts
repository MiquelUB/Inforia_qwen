export class User {
  constructor(
    public id: string,
    public email: string,
    public subscriptionStatus: string,
    public creditsUsed: number = 0,
    public creditsRemaining: number = 0,
    public packageId: string = 'basic',
    public packageExpiry: Date = new Date(),
    public planLimit: number = 20 // Por defecto al paquete básico
  ) {}

  isActive(): boolean {
    return this.subscriptionStatus === 'active';
  }

  isOverQuota(): boolean {
    return this.creditsUsed >= this.planLimit;
  }

  canGenerateReport(): boolean {
    return this.isActive() && !this.isOverQuota() && this.creditsRemaining > 0;
  }

  getPackageDetails(): { name: string; credits: number } {
    const packages = {
      'basic': { name: 'Básico', credits: 20 },
      'professional': { name: 'Profesional', credits: 50 },
      'clinic': { name: 'Clínica', credits: 150 }
    };
    
    return packages[this.packageId as keyof typeof packages] || packages['basic'];
  }

  getCreditWarningThreshold(): number {
    return Math.floor(this.planLimit * 0.1); // 10% del paquete
  }

  isNearCreditWarning(): boolean {
    return this.creditsRemaining <= this.getCreditWarningThreshold();
  }

  isCreditExhausted(): boolean {
    return this.creditsRemaining <= 0;
  }
}
