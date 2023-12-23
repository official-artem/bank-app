export abstract class BASE_USER {
  constructor(name: string, surname: string) {
    if (!name) {
      throw new Error("Invalid name");
    }

    if (!surname) {
      throw new Error("Invalid surname");
    }
  }
}
