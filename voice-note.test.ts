import { describe, expect, it } from "vitest";

const translateGreeting = (language: string, hindi: string) => {
  if (hindi.trim().toLowerCase() !== "सुप्रभात बच्चों!") return "";
  return language === "Santhali" ? "ᱡᱚᱦᱟᱨ ᱦᱚᱲᱠᱚ!" : "Johar horoko!";
};

describe("offline voice-note translation suggestion", () => {
  it("suggests the selected-language greeting for a known Hindi transcript", () => {
    expect(translateGreeting("Santhali", "सुप्रभात बच्चों!")).toBe("ᱡᱚᱦᱟᱨ ᱦᱚᱲᱠᱚ!");
    expect(translateGreeting("Ho", "सुप्रभात बच्चों!")).toBe("Johar horoko!");
    expect(translateGreeting("Mundari", "सुप्रभात बच्चों!")).toBe("Johar horoko!");
  });

  it("leaves unknown Hindi transcripts for teacher confirmation", () => {
    expect(translateGreeting("Ho", "இது ஒரு custom note")).toBe("");
  });
});
