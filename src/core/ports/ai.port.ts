export interface AIServicePort {
  askQwen(prompt: string, model?: string): Promise<string>;
}
