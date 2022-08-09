interface Item {
  id: string;
}

interface RestRepositoryType<T extends Item, Response> {
  get: (id: string) => Promise<T>;
  getAll: () => Promise<Array<T>>;
  add: (item: Partial<T>) => Promise<T>;
  update: (item: Partial<T>) => Promise<T>;
  delete: (id: T["id"]) => Promise<Response>;
}

export class RestRepository<T extends Item, Response>
  implements RestRepositoryType<T, Response>
{
  constructor(private url: string) {}

  async get(id: string) {
    const response = await fetch(this.url + id);
    return response.json();
  }

  async getAll() {
    const response = await fetch(this.url);
    return response.json();
  }

  async add(item: Partial<T>) {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application.json",
      },
    });

    return response.json();
  }

  async update(item: Partial<T>) {
    const response = await fetch(this.url + item.id, {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application.json",
      },
    });
    return response.json();
  }

  async delete(id: T["id"]) {
    const response = await fetch(this.url + id, {
      method: "DELETE",
    });
    return response.json();
  }
}
