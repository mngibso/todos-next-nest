"use client";

import {useEffect, useState} from "react"
import ToDos from "@/app/todos";
import {getAll} from "@/app/api/todos";

const Page = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ToDos/>
        </main>
    )
}
export default Page;