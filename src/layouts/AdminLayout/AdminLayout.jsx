import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function AdminLayout({children}) {
    return (
        <section>
            <header className="w-full h-[100px]">
                Header
            </header>
            <div className="flex">
                <nav className="w-[300px] px-4 divide-x-1">   
                    <Link className="block px-4 py-2 w-full bg-primary-600 text-white text-center text-bold rounded-lg" to={"/admin/users"}>Quản Lý Artists</Link>
                </nav>
                <div className="flex-1 px-6">
                    {children}
                </div>
            </div>
        </section>
    );
}

export default AdminLayout;