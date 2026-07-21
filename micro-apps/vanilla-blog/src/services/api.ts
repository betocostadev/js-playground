export class ApiClient {
  private BASE_URL: string
  private headers: HeadersInit

  constructor() {
    this.BASE_URL = 'https://jsonplaceholder.typicode.com'

    this.headers = {
      'Content-Type': 'application/json',
    }
  }

  async get<T>(url: string): Promise<T> {
    const response = await fetch(`${this.BASE_URL}/${url}`, {
      method: 'GET',
      headers: this.headers,
    })

    if (!response.ok) {
      throw new Error(`Request to [${url}] failed`)
    }

    return response.json()
  }

  async post<Body, Response>(url: string, body: Body): Promise<Response> {
    const response = await fetch(`${this.BASE_URL}/${url}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: this.headers,
    })

    if (!response.ok) {
      throw new Error(`Failed to add ${body} to ${url}`)
    }

    return response.json()
  }
}
