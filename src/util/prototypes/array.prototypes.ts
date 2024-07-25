interface Array<T> {
  skip(n: number): T[]
  take(n: number): T[]
}

Array.prototype.skip = function<T>(n: number): T[] {
  return this.slice(n);
};

Array.prototype.take = function<T>(n: number): T[] {
  return this.slice(0, n);
};