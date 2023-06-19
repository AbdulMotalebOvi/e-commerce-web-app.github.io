'use client'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";


export default function QueryProvider({ children }) {
    const [client] = useState(() => new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }));

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}
