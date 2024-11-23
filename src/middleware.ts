import { NextResponse, type NextRequest } from 'next/server'
import { getSession } from './lib/session'

export default async function (request: NextRequest) {
  const session = await getSession()

  console.log(session)
  console.log(request.nextUrl)
  console.log(request.url)

  if (
    !session.isLoggedIn &&
    request.nextUrl.pathname.startsWith('/dashboard')
  ) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
