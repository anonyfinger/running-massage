type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function pruneEmptyFields<T>(value: T): T {
  if (Array.isArray(value)) {
    const cleaned = value
      .map((item) => pruneEmptyFields(item))
      .filter((item) => item !== undefined && item !== null && item !== "");
    return cleaned as T;
  }

  if (isPlainObject(value)) {
    const entries = Object.entries(value)
      .map(([key, entryValue]) => [key, pruneEmptyFields(entryValue)] as const)
      .filter(([, entryValue]) => {
        if (entryValue === undefined || entryValue === null || entryValue === "") return false;
        if (Array.isArray(entryValue) && entryValue.length === 0) return false;
        if (isPlainObject(entryValue) && Object.keys(entryValue).length === 0) return false;
        return true;
      });
    return Object.fromEntries(entries) as T;
  }

  return value;
}

export function toJsonLd(schema: JsonValue): string {
  return JSON.stringify(pruneEmptyFields(schema));
}
