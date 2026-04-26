"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged } from "firebase/auth"   // ✅ import from firebase/auth
import { auth } from "./firebase"                   // ✅ bring in auth instance

interface User {
  uid: string
  email: string | null
  name?: string
  phone?: string
  college?: string
  completedGoals?: number
  leader?: boolean
  collegeVerified?: boolean
  profilePic?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, userData: Partial<User>) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // ✅ pass auth as first param
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: "Demo User", // Mock data for now
          completedGoals: 0,
          leader: false,
          collegeVerified: false,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const signIn = async (email: string, password: string) => {
    console.log("Sign in:", email)
  }

  const signUp = async (email: string, password: string, userData: Partial<User>) => {
    console.log("Sign up:", email, userData)
  }

  const logout = async () => {
    console.log("Logout")
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
