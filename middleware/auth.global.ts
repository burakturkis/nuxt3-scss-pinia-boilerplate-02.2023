
import { useAuth } from "~~/composables/useAuth"

export default defineNuxtRouteMiddleware((to: any, from: any) => {
    const isAuthenticated = useAuth()// useAuth() is a function that returns a boolean
    if (!to.path.includes('auth') && to.meta.restricted && !isAuthenticated) {
        return '/auth/login'
    }
    if (to.path.includes('auth') && isAuthenticated) {
        return '/'
    }
})