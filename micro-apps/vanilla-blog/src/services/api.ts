export class ApiClient {
  private BASE_URL: string
  private headers: HeadersInit

  constructor() {
    this.BASE_URL = 'https://jsonplaceholder.typicode.com'

    this.headers = {
      'Content-Type': 'application/json',
    }
  }

  async get(url: string) {
    const response = await fetch(`${this.BASE_URL}/${url}`, {
      headers: this.headers,
    })

    if (!response.ok) {
      throw new Error(`Request to [${url}] failed`)
    }

    return response.json()
  }
}
