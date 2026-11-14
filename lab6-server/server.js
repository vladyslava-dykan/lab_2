import Koa from 'koa';
import Router from '@koa/router';
import bodyParser from 'koa-bodyparser';
import serve from 'koa-static';
import path from 'node:path';
import { mkdir, appendFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';

const app = new Koa();
const router = new Router();

const HOST = '0.0.0.0';
const PORT = 3000;
const PUBLIC_DIR = path.join(import.meta.dirname, 'public');
const DATA_DIR = path.join(import.meta.dirname, 'data');
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback.jsonl');

const TOPICS = ['question', 'cooperation', 'other'];

function validate(body) {
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return 'Тіло запиту має бути JSON-об\'єктом.';
  }

  const { name, email, subject, message, topic } = body;

  if (
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof subject !== 'string' ||
    typeof message !== 'string' ||
    typeof topic !== 'string'
  ) {
    return 'Усі поля мають бути рядками.';
  }

  if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
    return 'Заповніть усі обов\'язкові поля.';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return 'Вкажіть коректну адресу електронної пошти.';
  }

  if (name.trim().length > 100) return 'Ім\'я занадто довге (максимум 100 символів).';
  if (email.trim().length > 254) return 'Email занадто довгий.';
  if (subject.trim().length > 150) return 'Тема занадто довга (максимум 150 символів).';
  if (message.trim().length > 2000) return 'Повідомлення занадто довге (максимум 2000 символів).';

  if (!TOPICS.includes(topic)) {
    return 'Оберіть коректну категорію звернення.';
  }

  return null;
}

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = {
      ok: false,
      error: ctx.status === 500 ? 'Внутрішня помилка сервера.' : 'Некоректний запит.'
    };
  }
});

app.use(bodyParser({ enableTypes: ['json'], jsonLimit: '10kb' }));

router.post('/api/contact', async (ctx) => {
  const body = ctx.request.body;
  const error = validate(body);

  if (error) {
    ctx.status = 400;
    ctx.body = { ok: false, error };
    return;
  }

  const record = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    name: body.name.trim(),
    email: body.email.trim(),
    subject: body.subject.trim(),
    topic: body.topic,
    message: body.message.trim()
  };

  try {
    await mkdir(DATA_DIR, { recursive: true });
    await appendFile(FEEDBACK_FILE, JSON.stringify(record) + '\n', 'utf8');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
    ctx.status = 500;
    ctx.body = { ok: false, error: 'Внутрішня помилка сервера.' };
    return;
  }

  ctx.status = 201;
  ctx.body = { ok: true, message: 'Звернення збережено локально.', id: record.id };
});

app.use(router.routes());
app.use(router.allowedMethods());

// Роздача статичних файлів із папки public
app.use(serve(PUBLIC_DIR));

app.listen(PORT, HOST, () => {
  console.log(`Сервер запущено: http://localhost:${PORT}`);
});