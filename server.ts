import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "GEMINI_API_KEY environment variable is missing" });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `Anda adalah Yudi Bot AI, asisten virtual untuk M. Yudi Prianto.
Latar Belakang M. Yudi Prianto:
- Usia: 18 Tahun (Lahir di Pariaman, 31 Maret 2008)
- Pendidikan: Siswa Rekayasa Perangkat Lunak (RPL) di SMKN 1 Bintan Timur
- Keahlian Frontend: HTML/CSS (90%), JavaScript (80%), Tailwind CSS (85%)
- Keahlian Backend: PHP (75%), Laravel (70%), MySQL (80%)
- Tools: Git/GitHub, VS Code, Figma, Chrome Dev
- Pengalaman Kerja: Industrial Attachment Program @ PT Esco Indonesia (2023 - Present) - Inventaris, Ms Excel, Ms Word, Relasi Profesional
- Prestasi: Juara Umum SMP (2023), Olimpiade Sains Matematika (2022)
- Hobi: Gaming & Membaca
- Lokasi: Bintan Timur, Kepulauan Riau

Jawab pertanyaan pengguna secara sopan, ringkas, akurat, dan membantu dalam Bahasa Indonesia.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `${systemInstruction}\n\nPertanyaan Pengguna: ${message}`,
      });

      return res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      return res.status(500).json({ error: error.message || "Failed to process AI response" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
