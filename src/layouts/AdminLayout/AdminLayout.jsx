import { Divider } from "@nextui-org/react";
import { Link } from "react-router-dom";

function AdminLayout({children}) {
    return (
        <section>
            <header className="w-full h-[120px] flex">
                <h1 className="w-full animate-charcter text-center">
                    CisnW - Music App
                </h1>
            </header>
            <Divider className="my-4"/>
            <div className="flex">
                <nav className="w-[300px] px-4">   
                    <Link style={{backgroundColor: "#22d3ee"}} className="block px-4 py-2 w-full bg-primary-600 text-white text-center text-bold rounded-lg hover:opacity-90 cursor-pointer hover:transition-all hover:rounded-2xl" to={"/admin/users"}>Quản Lý Artists</Link>
                </nav>
                {/* <div className="divider"></div> */}
                <div className="flex-1 px-6 h-[100vh] relative">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default AdminLayout;