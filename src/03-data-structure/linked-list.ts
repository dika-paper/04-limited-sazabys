export class ListNode<T> {
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

export class LinkedList<T> {
  private head: ListNode<T> | null = null;

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
    // COMPLETE THIS FUNCTION
    return;
  }

  /**
   * Removes the node with the specified value from the list.
   * @param value The value of the node to remove.
   */
  public remove(value: T): void {
    // COMPLETE THIS FUNCTION
    return;
  }

  /**
   * Finds and returns the first node containing the specified value.
   * @param value The value to search for in the list.
   * @returns The node containing the value, or null if not found.
   */
  public find(value: T): ListNode<T> | null {
    // COMPLETE THIS FUNCTION
    return null;
  }
}
