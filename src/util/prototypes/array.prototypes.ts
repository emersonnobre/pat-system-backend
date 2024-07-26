interface Array<T> {
  skip(n: number): T[]
  take(n: number): T[]
  orderBy(key: keyof T, order: "asc" | "desc"): T[]
}

Array.prototype.skip = function<T>(n: number): T[] {
  return this.slice(n);
};

Array.prototype.take = function<T>(n: number): T[] {
  return this.slice(0, n);
};

Array.prototype.orderBy = function<T>(key: keyof T, order: "asc" | "desc"): T[] {
  return this.slice().sort((a, b) => {
    const aValue = a[key]
    const bValue = b[key]
    if (aValue instanceof Date && bValue instanceof Date) {
      return (aValue.getTime() - bValue.getTime()) * (order === "asc" ? 1 : -1);
    } else if (typeof aValue === "string" && typeof bValue === "string") {
      return aValue.localeCompare(bValue) * (order === "asc" ? 1 : -1);
    } else {
      return (aValue as any) - (bValue as any) * (order === "asc" ? 1 : -1);
    }
  });
};