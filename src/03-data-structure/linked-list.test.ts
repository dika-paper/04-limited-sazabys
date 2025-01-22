import { LinkedList } from "./linked-list";

describe.skip("LinkedList", () => {
  describe("#append", () => {
    it("should append", () => {
      const list = new LinkedList<number>();

      list.append(1);
      list.append(2);
      list.append(3);

      expect(list.toArray()).toEqual([1, 2, 3]);
    });
  });

  describe("find", () => {
    it("should find", () => {
      const list = new LinkedList<number>();

      list.append(1);
      list.append(2);
      list.append(3);

      const find = list.find(3);

      expect(find?.value).toBe(3);
    });
  });

  describe("#remove", () => {
    it("should remove", () => {
      const list = new LinkedList<number>();

      list.append(1);
      list.append(2);
      list.append(3);
      list.remove(2);

      expect(list.toArray()).toEqual([1, 3]);
    });
  });
});
