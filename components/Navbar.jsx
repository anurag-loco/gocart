'use client'
import { Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";

const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/" },
    { label: "Contact", href: "/" },
];

const Navbar = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [search, setSearch] = useState('')
    const cartCount = useSelector(state => state.cart.total)

    const handleSearch = (e) => {
        e.preventDefault()
        router.push(`/shop?search=${search}`)
    }

    const isCurrentPage = (label) =>
        (label === "Home" && pathname === "/") ||
        (label === "Shop" && pathname.startsWith("/shop"));

    const linkClass = (label) =>
        `rounded-full px-3 py-2 transition-colors ${isCurrentPage(label)
            ? "bg-green-50 text-green-700"
            : "text-slate-600 hover:bg-slate-50 hover:text-green-700"}`;

    return (
        <nav aria-label="Main navigation" className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex h-16 items-center justify-between gap-4">
                    <Link href="/" aria-label="GoCart home" className="relative shrink-0 text-3xl font-semibold tracking-tight text-slate-700 sm:text-4xl">
                        <span className="text-green-600">go</span>cart<span className="text-green-600">.</span>
                        <span className="absolute -right-8 -top-1 rounded-full bg-green-600 px-2.5 py-0.5 text-[10px] font-semibold leading-4 text-white">
                            plus
                        </span>
                    </Link>

                    <div className="hidden items-center gap-3 text-sm font-medium lg:gap-5 sm:flex">
                        <div className="flex items-center gap-1">
                            {navigationLinks.map(({ label, href }) => (
                                <Link key={label} href={href} className={linkClass(label)} aria-current={isCurrentPage(label) ? "page" : undefined}>
                                    {label}
                                </Link>
                            ))}
                        </div>

                        <form onSubmit={handleSearch} className="hidden w-64 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-600/20 xl:flex">
                            <Search size={18} aria-hidden="true" className="shrink-0 text-slate-500" />
                            <input
                                aria-label="Search products"
                                className="w-full bg-transparent text-slate-700 outline-none placeholder:text-slate-500"
                                type="text"
                                placeholder="Search products"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                required
                            />
                        </form>

                        <Link href="/cart" aria-label={`Cart, ${cartCount} items`} className="relative flex items-center gap-2 rounded-full px-2 py-2 text-slate-600 transition-colors hover:bg-slate-50 hover:text-green-700">
                            <ShoppingCart size={18} aria-hidden="true" />
                            Cart
                            <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-green-600 text-[9px] font-semibold text-white">
                                {cartCount}
                            </span>
                        </Link>

                        <Link href="/login" className="rounded-full bg-green-600 px-6 py-2.5 font-medium text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                            Login
                        </Link>
                    </div>

                    <div className="flex items-center gap-3 sm:hidden">
                        <Link href="/cart" aria-label={`Cart, ${cartCount} items`} className="relative rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-50 hover:text-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                            <ShoppingCart size={20} aria-hidden="true" />
                            <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-green-600 text-[9px] font-semibold text-white">
                                {cartCount}
                            </span>
                        </Link>
                        <Link href="/login" className="rounded-full bg-green-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">
                            Login
                        </Link>
                    </div>
                </div>

                <div className="-mx-1 flex items-center gap-1 overflow-x-auto border-t border-slate-100 py-2 sm:hidden">
                    {navigationLinks.map(({ label, href }) => (
                        <Link key={label} href={href} className={`shrink-0 text-sm font-medium ${linkClass(label)}`} aria-current={isCurrentPage(label) ? "page" : undefined}>
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
