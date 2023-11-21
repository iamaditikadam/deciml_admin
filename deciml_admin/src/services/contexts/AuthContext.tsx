import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import React, { createContext, useContext, useEffect, useState } from "react"
import { auth } from "services/firebase"

const AuthContext = createContext<any>(null)

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider(props: { children: any }) {
    const [currentUser, setCurrentUser] = useState<any>()
	const [loading, setLoading] = useState<boolean>(true)

	async function signInWithGoogle() {
		const googleAuthProvider = new GoogleAuthProvider();
		await signInWithPopup(auth, googleAuthProvider)
	}

}



