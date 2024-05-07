"use client";

import ToDos from "@/app/components/todos";

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ToDos/>
        </main>
    )
}
export default Page;