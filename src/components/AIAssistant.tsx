'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Send, Sparkles } from 'lucide-react';
import { askAI } from '@/app/actions/askAI';

export default function AIAssistant() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsLoading(true);
    setAnswer('');
    
    const result = await askAI(question);

    if (result.success && result.answer) {
        setAnswer(result.answer);
    } else {
        setAnswer(result.answer || 'Ошибка связи с ИИ.');
    }
    setIsLoading(false);
  };

  return (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto w-full mt-10 p-1 rounded-2xl bg-linear-to-r from-orange-500/30 to-purple-500/30 backdrop-blur-md"
    >
      <div className="bg-[#0a0a0a] rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-4">
                <Bot className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-mono text-white font-bold flex items-center gap-2">
                    Спроси моего AI агента <Sparkles className="w-4 h-4 text-purple-400" />
                </h3>
            </div>
            
            <p className="text-gray-400 text-sm font-mono mb-4">
                Лень читать резюме? Спроси моего ИИ-агента обо мне. Например: &quot;Какой у него стек?&quot; или &quot;Расскажи шутку&quot;.
            </p>

        <form onSubmit={handleAsk} className="flex gap-2">
            <input 
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Спроси что-нибудь..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white font-mono focus:border-orange-500 outline-none transition-colors"
            />
            <button 
                type="submit"
                disabled={isLoading || question.length === 0 ? true : undefined}
                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors disabled:opacity-50"
            >
                {isLoading ? <Sparkles className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
        </form>

        {answer && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg"
          >
            <p className="text-gray-300 font-mono text-sm leading-relaxed whitespace-pre-wrap">
              {answer}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}