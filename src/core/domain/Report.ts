export class Report {
  constructor(
    public id: string,
    public userId: string,
    public patientId: string,
    public content: string,
    public createdAt: Date = new Date()
  ) {}
}
