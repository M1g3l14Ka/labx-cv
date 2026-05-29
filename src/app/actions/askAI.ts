'use server';

import { GoogleGenerativeAI } from '@google/generative-ai';

export async function askAI(userQuestion: string) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GEMINI_API_KEY is not set');

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-3.5-flash' });

    const systemPrompt = `
    Ты - умный, саркастичный и профессиональный ИИ-ассистент разработчика Михаила Кациона (Misha). 
    Отвечай на вопросы пользователя от лица его ассистента. Будь краток (максимум 2-3 предложения), используй юмор программистов.
    
    Информация о Михаиле:
    - Уровень: Junior+ / Pre-Middle Fullstack.
    - Стек: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Prisma, Node.js.
    - Подход к ИИ: Михаил использует ИИ как высокоточный станок ЧПУ, выступая в роли архитектора и оператора.
    - Крутые проекты: "Ventala" (генерация тысяч SKU для 1С-Битрикс на Node.js), "Cleantech" (SEO автоматизация).
    - Любимая шутка про ошибки: "418 I'm a teapot - единственная ошибка, которую я пока не получал в продакшене".
    - Хобби: CS2, PUBG, MLBB и поглощение тонн кофе.

    Ответь на следующий вопрос пользователя опираясь на эту информацию: "${userQuestion}"
    `;

    const result = await model.generateContent(systemPrompt);
    const text = result.response.text();

    return { success: true, answer: text };
  } catch (error) {
    console.error('Gemini Error:', error);
    return { success: false, answer: 'Кажется, сервер перепил кофе и выдал ошибку 500. Попробуйте позже!' };
  }
}