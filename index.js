// index.js
import proxy from './proxy';

export default async function handler(req, res) {
  return proxy(req, res);
}