/**
 *
 * CHALLENGE I
 * ARRAY
 *
 */

// --------------------------------------------------------------------------------
// CHUNK ARRAY
// --------------------------------------------------------------------------------

/**
 * Breaks an array into an array of arrays of a given size.
 *
 * @example
 * chunkArray([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 *
 * @param arr - The array to break up
 * @param size - The size of each chunk
 * @returns An array of arrays of size `size`
 */
function chunkArray(arr: number[], size: number): number[][] {
  const result: number[][] = [];

  return result;
}

// test cases
const tests1: Array<[number[], number]> = [
  [[1, 2, 3, 4, 5], 2],
  [[1, 1, 1, 1, 1, 1], 3],
  [[1, 2, 3], 6],
];

tests1.forEach((t) => {
  console.log("chunkArray: \n", {
    input: t[0],
    output: chunkArray(t[0], t[1]),
  });
});

// --------------------------------------------------------------------------------
console.log("---------------------------------------");
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// REMOVE DUPLICATES
// --------------------------------------------------------------------------------

/**
 * Removes all duplicate elements from an array.
 *
 * @example
 * removeDuplicates([1, 2, 2, 3, 4, 4]) // [1, 2, 3, 4]
 *
 * @param arr - The array to deduplicate
 * @returns A new array with all duplicate elements removed
 */
function removeDuplicates(arr: number[]) {
  const result: number[] = [];

  return result;
}

const tests2: number[][] = [
  [1, 2, 3, 4, 5],
  [1, 1, 1, 1, 1, 1],
  [1, 2, 3],
];

// test cases
tests2.forEach((t) => {
  console.log("removeDuplicates: \n", {
    input: t,
    output: removeDuplicates(t),
  });
});

// --------------------------------------------------------------------------------
console.log("---------------------------------------");
// --------------------------------------------------------------------------------

// --------------------------------------------------------------------------------
// FIND COMMON ELEMENTS
// --------------------------------------------------------------------------------

/**
 * Finds all common elements between two arrays.
 *
 * @example
 * findCommonElements([1, 2, 3, 4, 5], [2, 3, 6, 7]) // [2, 3]
 *
 * @param arr1 - The first array
 * @param arr2 - The second array
 * @returns A new array with all common elements between the two arrays
 */
function findCommonElements(arr1: number[], arr2: number[]) {
  const result: number[] = [];

  return result;
}

// test cases
const tests3 = [
  [[], []],
  [[1], [1]],
  [[1], [2]],
];

tests3.forEach((t) => {
  console.log("findCommonElements: \n", {
    input: t[0],
    output: findCommonElements(t[0], t[1]),
  });
});

// --------------------------------------------------------------------------------
console.log("---------------------------------------");
// --------------------------------------------------------------------------------

/**
 *
 * CHALLENGE II
 * DATA STRUCTURES
 *
 */

class ListNode<T> {
  public value: T;
  public next: ListNode<T> | null;

  /**
   * Constructs a new instance of ListNode.
   * @param value The value to store in the node.
   */
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: ListNode<T> | null = null;

  /**
   * Appends a new node with a specific value to the end of the list.
   * @param value The value to add to the list.
   */
  public append(value: T): void {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  /**
   * Prepends a new node with a specific value to the start of the list.
   * @param value The value to add at the beginning of the list.
   */
  public prepend(value: T): void {
    //
  }

  /**
   * Converts the linked list into an array of its values.
   * Useful for debugging and viewing the list.
   * @returns An array of values from the linked list.
   */
  public toArray(): T[] {
    const elements: T[] = [];
    let current = this.head;

    while (current) {
      elements.push(current.value);
      current = current.next;
    }

    return elements;
  }

  /**
   * Removes the node with the specified value from the list.
   * @param value The value of the node to remove.
   */
  public remove(value: T): void {
    //
  }

  /**
   * Finds and returns the first node containing the specified value.
   * @param value The value to search for in the list.
   * @returns The node containing the value, or null if not found.
   */
  public find(value: T): ListNode<T> | null {
    return null;
  }
}

// Example usage
const list = new LinkedList<number>();

list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.remove(2);

console.log(list.toArray()); // Should output: [0, 1, 3]
