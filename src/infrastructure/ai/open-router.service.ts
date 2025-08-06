import axios from 'axios';
import { AIServicePort } from '@/core/ports/ai.port';

export class OpenRouterAIService implements AIServicePort {
  private readonly url = 'https://openrouter.ai/api/v1/chat/completions';
  private readonly key = process.env.OPENROUTER_KEY!;

  async askQwen(prompt: string, model = 'qwen/qwen2-72b-instruct'): Promise<string> {
    const { data } = await axios.post(this.url, {
      model,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 800,
      temperature: 0.3,
    }, {
      headers: {
        Authorization: Bearer ,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXTAUTH_URL!,
        'X-Title': 'INFORIA',
      },
    });
    return data.choices[0]?.message?.content || '';
  }
}
