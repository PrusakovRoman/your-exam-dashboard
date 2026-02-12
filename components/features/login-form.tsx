'use client'

import { useActionState } from "react"
import { useSearchParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// import { authenticate } from "@/app/lib/actions"
import { FileExclamationPoint } from "lucide-react"

export default function LoginForm() {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
    // const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined)

    return (
        <>
            <div
                className="flex h-8 items-end space-x-1 pb-3"
                aria-live="polite"
                aria-atomic="true"
            >
                {/* {errorMessage ? (
                    <>
                        <FileExclamationPoint className="h-5 w-5 text-red-500" />
                        <p className="text-sm text-red-500">{errorMessage}</p></>
                ) : null} */}
            </div>
            <form
                // action={formAction}
                className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Электронная почта</Label>
                    <Input
                        id="login"
                        name="login"
                        type="login"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <Label htmlFor="password">Пароль</Label>
                    </div>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        required
                        minLength={6}
                    />
                </div>
                <input type="hidden" name="customRedirect" value={callbackUrl} />
                {/* <Button className="w-full text-white" type="submit" aria-disabled={isPending}>
                    {isPending ? 'Загрузка...' : 'Войти'}
                </Button> */}
                <Button className="w-full text-white" type="submit" >Войти</Button>
            </form>
        </>)
}