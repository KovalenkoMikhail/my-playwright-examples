import dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
  baseUrl: process.env.BASE_URL || 'www.hopa.com',
  credentials: {
    email: process.env.TEST_EMAIL || 'test@example.com',
    password: process.env.TEST_PASSWORD || 'TestPassword123!'
  }
};