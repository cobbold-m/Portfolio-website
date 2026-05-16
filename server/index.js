import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import contactRouter from './routes/contact.js';

// TODO: Uncomment the line below and install dotenv (`npm install dotenv`)
//       if you want to use a .env file for EMAIL_USER, EMAIL_PASS, etc.
// import 'dotenv/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────────────────────────

app.use(
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? [
            // TODO: Replace with your actual production domain(s)
            'https://your-portfolio.vercel.app',
            'https://yourdomain.com',
          ]
        : '*', // Allow all origins in development
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// ── API Routes ────────────────────────────────────────────────────────────────

// Health check endpoint — useful for deployment monitoring
app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// Contact form route
app.use('/api/contact', contactRouter);

// Catch-all for unknown API routes
app.use('/api/*', (_req, res) => {
  res.status(404).json({ error: 'API endpoint not found.' });
});

// ── Static Files (Production) ─────────────────────────────────────────────────

if (process.env.NODE_ENV === 'production') {
  const clientDistPath = path.join(__dirname, '..', 'client', 'dist');
  app.use(express.static(clientDistPath));

  // For React Router — serve index.html for any non-API route
  app.get('*', (_req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

// ── Start Server ──────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`\n  Portfolio API server running on http://localhost:${PORT}`);
  console.log(`  Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`  Health check: http://localhost:${PORT}/api/health\n`);
});

export default app;
