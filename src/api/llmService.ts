import axios from 'axios';

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_KEY = import.meta.env.VITE_OPENROUTER_KEY; // clave en .env

export async function askQwen(
  prompt: string,
  model = 'qwen/qwen2-72b-instruct'
): Promise<string> {
  if (!OPENROUTER_KEY) {
    throw new Error('Falta VITE_OPENROUTER_KEY en variables de entorno');
  }

  const { data } = await axios.post(
    OPENROUTER_URL,
    {
      model,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1024,
      temperature: 0.3
    },
    {
      headers: {
        Authorization: Bearer ,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:5173',
        'X-Title': 'INFORIA-QWEN'
      }
    }
  );

  return data.choices[0]?.message?.content || '';
}
