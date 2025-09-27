import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Demo users for static site
    const demoUsers = [
        {
            id: 1,
            name: "Ramjan Khan",
            email: "ramjan@example.com",
            password: "password123",
            role: "user",
            favorites: [1, 3, 11, 16, 26],
            bookings: []
        },
        {
            id: 2,
            name: "Admin User",
            email: "ramjanKhan@example.com", 
            password: "admin123",
            role: "admin",
            favorites: [],
            bookings: []
        }
    ];

    const createUser = async (name, email, password) => {
        setLoading(true);
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Check if user already exists
            const existingUser = demoUsers.find(u => u.email === email);
            if (existingUser) {
                throw new Error('User already exists');
            }

            // Create new user
            const newUser = {
                id: Date.now(),
                name,
                email,
                password,
                role: "user",
                favorites: [],
                bookings: []
            };

            // Store in localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            // Set current user (remove password from user object)
            const { password: _, ...userWithoutPassword } = newUser;
            setUser(userWithoutPassword);
            localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
            
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logIn = async (email, password) => {
        setLoading(true);
        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 800));
            
            // Check demo users first
            let foundUser = demoUsers.find(u => u.email === email && u.password === password);
            
            // If not found in demo users, check localStorage
            if (!foundUser) {
                const users = JSON.parse(localStorage.getItem('users') || '[]');
                foundUser = users.find(u => u.email === email && u.password === password);
            }

            if (!foundUser) {
                throw new Error('Invalid email or password');
            }

            // Set current user (remove password from user object)
            const { password: _, ...userWithoutPassword } = foundUser;
            setUser(userWithoutPassword);
            localStorage.setItem('currentUser', JSON.stringify(userWithoutPassword));
            
        } catch (error) {
            console.error('Error logging in:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logOut = () => {
        setUser(null);
        localStorage.removeItem('currentUser');
    };

    useEffect(() => {
        setLoading(true);
        try {
            // Check if user is already logged in
            const savedUser = localStorage.getItem('currentUser');
            if (savedUser) {
                setUser(JSON.parse(savedUser));
            }
        } catch (error) {
            console.error('Error loading user from localStorage:', error);
            localStorage.removeItem('currentUser');
        } finally {
            setLoading(false);
        }
    }, []);

    const authInfo = {
        user,
        loading,
        logIn,
        createUser,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
