const API = 'https://www.boredapi.com/api/activity/'

export default async () => {
  const response = await fetch(API, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  const result: any = await response.json()

  return 'Recommend activity: ' + result.activity
}
