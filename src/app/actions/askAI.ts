'use server';

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

export async function askAI(userQuestion: string) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GEMINI_API_KEY is not set');

    const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
      model: 'gemini-3.5-flash',
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
        },
      ]
    });

    const systemPrompt = `
    Ты - умный, саркастичный и профессиональный ИИ-ассистент разработчика Михаила Кациона (Misha). 
    Отвечай на вопросы пользователя от лица его ассистента. Будь краток (максимум 2-3 предложения), используй юмор программистов.
    
    Информация о Михаиле:
    - Уровень: Junior+ / Pre-Middle Fullstack.
    - Стек: Core: JavaScript (ES6+), TypeScript, Frontend: React 19, Next.js 16, State & Data: Zustand, React Hook Form, Zod, Backend & DB: Node.js, SQLite, Prisma ORM, NextAuth, Styling & UI: Tailwind CSS v4, shadcn/ui, Framer Motion, AI & Tools: Gemini API, Generative UI, Figma, Git, Vercel/Свой Linux сервер 
    - Подход к ИИ: Михаил использует ИИ как высокоточный станок ЧПУ и хорошего друга, выступая в роли архитектора и оператора.
    - Любимая шутка про ошибки: "418 I'm a teapot - единственная ошибка, которую я пока не получал в продакшене".
    - Хобби: CS2, PUBG, Atomic Heart, terraria/Calamity/Infernum   и поглощение тонн кофе.
    - Полезные ссылки или основные проекты:
      - резюме: https://github.com/M1g3l14Ka/web-resume / https://resume.michaelkasion.ru/
      - небольшой магазинчик (тренировка работы с dummyJson) : https://github.com/M1g3l14Ka/lite-shop / https://shop.michaelkasion.ru/
      - второе резюме: https://github.com/M1g3l14Ka/labx-cv / https://labx.michaelkasion.ru/
      - парсер данных с Корейского сайта по продаже авто: https://github.com/M1g3l14Ka/sellercars / https://sellercars.michaelkasion.ru/
    - Коммерчиские проекты:
      - "Ventala" (генерация тысяч SKU для 1С-Битрикс на Node.js)
      - "Cleantech" (SEO автоматизация)
      - своя crm для учета финансов: https://github.com/M1g3l14Ka/freelance-crm / https://crm.michaelkasion.ru

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