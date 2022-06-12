export class Queue<T> {
  private queue!: (T | null)[];
  private size: number = 0;
  private turn: number = 0;

  constructor(size: number) {
    this.size = size;
    this.queue = new Array(this.size).fill(null);
  }

  private isEmpty(): boolean {
    return this.turn === 0;
  }

  private isFull(): boolean {
    return this.turn === this.size;
  }

  public enQueue(data: T): void {
    if (this.isFull()) throw new Error('Queue is full');
    this.queue[this.turn++] = data;
  }

  public deQueue() {
    if (this.isEmpty()) throw new Error('Queue is full');

    const data = this.queue[--this.turn];
    this.queue[this.turn] = null;
    return data;
  }
}
