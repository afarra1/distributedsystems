import React, { createContext, useEffect, useState } from 'react';
import { supabase } from '../SupabaseClient';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
            setSession(session);
        });

        // Get the initial session
        const currentSession = supabase.auth.getSession();
        setSession(currentSession);

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={session}>
            {children}
        </AuthContext.Provider>
    );
};
