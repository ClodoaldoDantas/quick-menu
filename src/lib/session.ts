import { getIronSession, type SessionOptions } from 'iron-session'
import { cookies } from 'next/headers'

export interface SessionData {
  email: string
  isLoggedIn: boolean
}

export const defaultSession: SessionData = {
  email: '',
  isLoggedIn: false,
}

export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_PASSWORD!,
  cookieName: 'quickmenu-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
  },
}

export async function getSession() {
  const cookiesStore = await cookies()

  const session = await getIronSession<SessionData>(
    cookiesStore,
    sessionOptions,
  )

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn
    session.email = defaultSession.email
  }

  return session
}
