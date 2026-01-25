import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { supabase } from "../config/supabase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  const mapUser = (sessionUser) =>
    sessionUser
      ? {
          uid: sessionUser.id,
          email: sessionUser.email,
          name: sessionUser.user_metadata?.full_name || null,
          provider: sessionUser.app_metadata?.provider || "password",
        }
      : null;

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const sessionUser = data?.session?.user || null;
      setUser(mapUser(sessionUser));
      setInitializing(false);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        const sessionUser = session?.user || null;
        setUser(mapUser(sessionUser));
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    setInitializing(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    setUser(mapUser(data.user));
    setInitializing(false);
    return data.user;
  };

  const signup = async (email, password, metadata = {}) => {
    setInitializing(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
      },
    });
    if (error) throw error;
    setUser(mapUser(data.user));
    setInitializing(false);
    return data.user;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setInitializing(false);
  };

  const value = useMemo(
    () => ({
      user,
      initializing,
      login,
      signup,
      logout,
    }),
    [user, initializing]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
}
