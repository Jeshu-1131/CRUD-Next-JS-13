import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center bg-black px-8 py-3 rounded-sm">
            <Link className="text-white font-bold" href={"/"}>CRUDAPP</Link>
            <Link className="bg-white p-2 rounded-sm" href={'/addTopic'}>Add Topic</Link>
        </nav>
    )
}