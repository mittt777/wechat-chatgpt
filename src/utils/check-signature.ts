import sha1 from 'crypto-js/sha1';

export default (url: URL, token: string) => {
	const searchParams: URLSearchParams = url.searchParams
	const signature: string | null = searchParams.get('signature')
	const timestamp: string | null = searchParams.get('timestamp')
	const nonce: string | null = searchParams.get('nonce')
	const echostr: string | null = searchParams.get('echostr')

	let temStr = [token, timestamp, nonce].sort().join('')
	temStr = sha1(temStr).toString()

	return temStr === signature ? echostr : null
}
