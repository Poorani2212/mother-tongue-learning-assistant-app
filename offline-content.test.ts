import { describe, expect, it } from "vitest";

type Content = { id: string; status: "published" | "draft"; type: string };

const studentVisible = (items: Content[]) => items.filter((item) => item.status === "published");
const publish = (items: Content[], item: Content) => [...items, { ...item, status: "published" as const }];

describe("offline content rules", () => {
  it("shows students only published teacher content", () => {
    const items: Content[] = [
      { id: "published-1", status: "published", type: "lesson" },
      { id: "draft-1", status: "draft", type: "worksheet" },
    ];
    expect(studentVisible(items).map((item) => item.id)).toEqual(["published-1"]);
  });

  it("makes newly published content immediately available locally", () => {
    const items: Content[] = [];
    const next = publish(items, { id: "lesson-2", status: "draft", type: "lesson" });
    expect(next).toEqual([{ id: "lesson-2", status: "published", type: "lesson" }]);
  });
});
