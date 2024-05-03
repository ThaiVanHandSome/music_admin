import { Input, Select, SelectItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "~/layouts/AdminLayout";
import { getUserById } from "~/services/ApiServices/UserService";

function User() {
    const { id } = useParams();
    const [user, setUser] = useState({});

    const getUser = async () => {
        const res = await getUserById(id);
        console.log(res.role);
        setUser(res);
    }

    useEffect(() => {
        getUser();
    }, []);
    return (
        <AdminLayout>
            <section>
                <div className="mb-6">
                    <h2 className="text-bold mb-1 text-xl">Id</h2>
                    <Input size="md" value={user.idUser} readOnly/>
                </div>
                <div className="mb-6">
                    <h2 className="text-bold mb-1 text-xl">Nickname</h2>
                    <Input size="md" value={user.nickname} readOnly/>
                </div>
                <div className="mb-6">
                    <h2 className="text-bold mb-1 text-xl">FirstName</h2>
                    <Input size="md" value={user.firstName} readOnly/>
                </div>
                <div className="mb-6">
                    <h2 className="text-bold mb-1 text-xl">LastName</h2>
                    <Input size="md" value={user.lastName} readOnly/>
                </div>
                <div className="mb-6">
                    <h2 className="text-bold mb-1 text-xl">Gender</h2>
                    <Input size="md" value={user.gender} readOnly/>
                </div>
                <div className="mb-6">
                    <h2 className="text-bold mb-1 text-xl">Email</h2>
                    <Input size="md" value={user.email} readOnly/>
                </div>
                <div className="mb-6">
                    <h2 className="text-bold mb-1 text-xl">PhoneNumber</h2>
                    <Input size="md" value={user.phoneNumber} readOnly/>    
                </div>
                <div className="mb-6">
                    <h2 className="text-bold mb-1 text-xl">Role</h2>
                    <Select defaultSelectedKeys={[user.role === "USER" ? "USER" : ""]}>
                        <SelectItem key="USER" value="USER">
                            USER
                        </SelectItem>
                        <SelectItem key="ARTIST" value="ARTIST">
                            ARTIST
                        </SelectItem>
                    </Select>
                </div>
            </section>
        </AdminLayout>
    );
}

export default User;