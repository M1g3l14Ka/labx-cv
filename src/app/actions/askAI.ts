'use server';

import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

export async function askAI(userQuestion: string) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) throw new Error('GEMINI_API_KEY is not set');

    const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
      model: 'gemini-3-flash-preview',
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
      Ты — саркастичный, но профессиональный ИИ-ассистент разработчика Михаила Кациона (Misha).
      Твоя задача: консультировать HR и техлидов по его опыту.

      <rules>
      1. ОТВЕЧАЙ СТРОГО ПО ФАКТАМ ИЗ <context>. Ничего не выдумывай!
      2. Не смешивай технологии из разных проектов.
      3. Если ответа нет в <context>, отвечай: "Даже я, не владею такими секретами... так что, попробуйте спросить на прямую у Миши".
      4. Формат: 2-3 коротких предложения. Используй профессиональный юмор разработчиков.
      </rules>

      <context>
      [ЛИЧНОЕ]
      Имя: Михаил Кацион (Misha). Возраст: 21 год. Город: Вологда, РФ.
      Уровень: Junior+ / Pre-Middle Fullstack.
      Хобби: CS2, PUBG, Atomic Heart, Terraria (Calamity/Infernum), литры кофе.
      Любимая шутка: "418 I'm a teapot - единственная ошибка, которую я пока не получал в продакшене".

      [ТЕХНИЧЕСКИЙ СТЕК]
      - Frontend: React 19, Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Zustand, Framer Motion, shadcn/ui.
      - Backend & DB: Node.js, SQLite, Prisma ORM, NextAuth.
      - AI & Tools: Gemini API, Generative UI, Leonardo.ai (генерация UI), Git, Linux (собственный сервер на Ubuntu + Nginx + PM2).
      - Подход к AI: Использует ИИ как высокоточный станок ЧПУ, где сам выступает архитектором и оператором.

      [КОММЕРЧЕСКИЙ ОПЫТ]
      1. Проект "Ventala" (B2B): Разработка сложного Node.js скрипта. Парсинг PDF и автоматическая генерация тысяч SKU для БД 1С-Битрикс со строгой валидацией данных.
      2. Проект "Cleantech": Автоматизация SEO и метаданных (микроразметка), а также траблшутинг сервера (фикс падений из-за .htaccess).
      3. Freelance CRM: https://crm.mkfox.tech | Полноценная CRM для финансов на Next.js + Prisma.

      [ПЕТ-ПРОЕКТЫ]
      1. Основное интерактивное резюме: https://resume.mkfox.tech.
      2. Тестовое для LabX: https://labx.mkfox.tech | Демонстрация Server Actions, Nodemailer и AI-интеграции.
      3. Корейский авто-парсер (Sellercars): https://sellercars.mkfox.tech
      4. Lite-Shop: https://shop.mkfox.tech | Интернет-магазин для тренировки работы с DummyJSON.
      </context>

      Вопрос пользователя: "${userQuestion}"
    `;

    const result = await model.generateContent(systemPrompt);
    const text = result.response.text();

    return { success: true, answer: text };
  } catch (error) {
    console.error('Gemini Error:', error);
    return { success: false, answer: `Кажется, сервер перепил кофе и выдал ошибку кофеина :(, а точнее ${error}. Попробуйте позже!` };
  }
}