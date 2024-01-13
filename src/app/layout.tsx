import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Pede.AI',
    description: 'Venda Mais no #delivery com o Poder do WhatsApp!',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}
