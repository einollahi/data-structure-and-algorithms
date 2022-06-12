class NODE<T> {
  public head!: NODE<T> | T;
  public next!: NODE<T> | null;

  constructor(head: T) {
    this.head = head;
    this.next = null;
  }
}

export class LinkedList<T> {
  public head!: NODE<T> | null;
  private size: number = 0;

  constructor() {
    this.head = null;
  }

  public add(data: T): void {
    const node = new NODE(data);

    if (!this.head) {
      this.head = node;
      this.size++;
    } else {
      let head = this.head;

      while (head.next !== null) {
        head = head.next as NODE<T>;
      }

      head.next = node;
      this.size++;
    }
  }

  public remove(data: T): void {
    if (!this.head) return;

    let head = this.head;

    if (head.head === data) {
      this.head = head.next as NODE<T>;
      this.size--;
      return;
    }

    while (head.next !== null) {
      if (head.next.head === data) {
        head.next = head.next.next;
        this.size--;
      } else {
        head = head.next;
      }
    }
  }

  public getSize(): number {
    return this.size;
  }

  public toArray(): T[] {
    if (!this.head) return [];

    const array = new Array(this.size).fill(null);

    let head = this.head;
    let step = 0;

    while (head.next !== null) {
      array[step++] = head.head;
      head = head.next;
    }
    array[step] = head.head;

    return array;
  }

  public print(): void {
    if (!this.head) return;

    let head = this.head;

    while (head.next !== null) {
      console.log(head.head);

      head = head.next;
    }
    console.log(head.head);
  }
}

const ll = new LinkedList<string>();

ll.add('ali');
ll.add('reza');
ll.add('alireza');
console.log(ll.getSize());
ll.print();
console.log(ll.toArray());
ll.remove('alireza');
ll.print();
console.log(ll.getSize());
console.log(ll.toArray());
