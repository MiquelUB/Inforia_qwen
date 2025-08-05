import React, { useState } from 'react';
import { askQwen } from '../api/llmService';

export default function QwenChat() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const answer = await askQwen(prompt);
      setResponse(answer);
    } catch (err: any) {
      setResponse('? Error: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 24, fontFamily: 'sans-serif' }}>
      <h2>Chat con Qwen2-72B</h2>
      <textarea
        rows={4}
        cols={60}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder='Escribe tu pregunta...'
      />
      <br />
      <button onClick={handleSend} disabled={loading}>
        {loading ? 'Pensando...' : 'Enviar'}
      </button>
      <pre style={{ whiteSpace: 'pre-wrap', background: '#f5f5f5', padding: 12 }}>
        {response || 'Esperando respuesta...'}
      </pre>
    </div>
  );
}
