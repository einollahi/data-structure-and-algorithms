export class Stack<T> {
  private readonly MAX!: number;
  private top: number = 0;
  private stack: (T | null)[] = new Array(this.MAX).fill(null);

  constructor(max: number) {
    this.MAX = max;
  }

  public isEmpty(): boolean {
    return this.top < 0;
  }

  public push(data: T): void {
    if (this.top >= this.MAX - 1) throw new Error('Stack Overflow');
    this.stack[this.top++] = data;
  }

  public pop(): void {
    if (this.top <= 0) throw new Error('Stack Underflow');
    this.stack[this.top--] = null;
  }

  public peek(): T {
    if (this.top <= 0) throw new Error('Stack Underflow');
    return this.stack[this.top - 1] as T;
  }
}
