export class ApiClient {
  private readonly baseUrl: string
  private headers: HeadersInit

  constructor() {
    this.baseUrl = 'https://jsonplaceholder.typicode.com'

    this.headers = {
      'Content-Type': 'application/json',
    }
  }

  protected buildUrl(path: string, params?: Record<string, unknown>) {
    if (!params) return path

    const searchParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
      // const realValue = value !== undefined && value !== null && value !== ''.length
      const realValue = value !== undefined && value !== null && value !== ''.length
      if (realValue) {
        console.log('Object entries, key is: ', key)
        searchParams.set(key, String(value))
      }
    })

    return `${path}?${searchParams.toString()}`
  }

  async get<T>(path: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${path}`, {
      method: 'GET',
      headers: this.headers,
      ...options,
    })

    if (!response.ok) {
      throw new Error(`Request to [${path}] failed`)
    }

    return response.json() as Promise<T>
  }

  async post<Body, Response>(path: string, body: Body): Promise<Response> {
    const response = await fetch(`${this.baseUrl}/${path}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    })

    if (!response.ok) {
      throw new Error(`Failed to add ${body} to ${path}`)
    }

    return response.json() as Promise<Response>
  }
}
