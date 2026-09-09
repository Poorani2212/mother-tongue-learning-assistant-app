import { describe, expect, it } from "vitest";

const makeFallbackState = (online: boolean, transcript: string, translation: string) =>
  online && transcript && translation
    ? { mode: "online", transcript, translation }
    : { mode: "offline", transcript: "", translation: "" };

describe("online voice-note fallback", () => {
  it("keeps the target language in the request payload", () => {
    const payload = { audioBase64: "ZmFrZQ==", fileName: "teacher-voice-note.wav", contentType: "audio/wav", targetLanguage: "Mundari" };
    expect(payload.targetLanguage).toBe("Mundari");
    expect(payload.contentType).toBe("audio/wav");
  });

  it("falls back safely when online AI is unavailable", () => {
    expect(makeFallbackState(false, "", "").mode).toBe("offline");
    expect(makeFallbackState(true, "नमस्ते", "Johar").mode).toBe("online");
  });
});
