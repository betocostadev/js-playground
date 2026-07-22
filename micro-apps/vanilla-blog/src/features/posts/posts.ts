import postsService from '../../services/postsService'

export async function fetchPosts() {
  try {
    const response = await postsService.getPosts()
    console.log(response)
    return response
  } catch (error) {
    console.log('Failed to fetch posts')
    console.error(error)
  }
}
