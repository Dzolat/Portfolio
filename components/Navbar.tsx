import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed flex justify-between items-center w-full h-15 bg-gray-900">
            <Image
                className="mx-5"
                width={40}
                height={40}
                src="/DIO.png"
                alt="Profile Picture"
            />

            <div className="flex justify-center items-center h-15">
                <Link href="/">Home</Link>
            </div>

            <Link href="/contact" className="mx-5">
                Contact
            </Link>
        </nav>
    );
}