import { Button, Input, Select, SelectItem, Spinner } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "~/layouts/AdminLayout";
import { sendEmail } from "~/services/ApiServices/AuthService";
import { getUserById, updateUser } from "~/services/ApiServices/UserService";

const roles = [{
    value: "USER",
    label: "USER"
},
{
    value: "ARTIST",
    label: "ARTIST"
},{
    value: "ADMIN",
    label: "ADMIN"
}]

const message = "<div style=\"max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); padding: 20px;\">" +
    "<h2 style=\"color: #333;\">Thông Báo Phê Duyệt Quyền Artist</h2>" +
    "<p style=\"font-size: 16px;\">Chúc mừng bạn! Bạn đã được phê duyệt quyền Artist. Giờ đây, bạn có thể sử dụng tài khoản này để đăng nhập vào App CisnW Artist của chúng tôi.</p>" +
    "<p style=\"font-size: 14px; color: #666; margin-top: 20px;\">Trân trọng!</p>" +
    "</div>";

function User() {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [selectedRole, setSelectedRole] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isInitLoading, setIsInitLoading] = useState(true);

    const handleSelectChange = (value) => {
        setSelectedRole(value.currentKey);
      };

    const getUser = async () => {
        const res = await getUserById(id);
        setSelectedRole(user.role)
        setUser(res);
        setIsInitLoading(false);
    }

    const handleSave = async () => {
        setIsLoading(true);
        const res = await updateUser(id, {role: selectedRole});
        if(selectedRole === "ARTIST" && selectedRole !== user.role) {
            await sendEmail({
                email: user.email,
                message
            });
        }
        window.location.href = "/admin/users";
    }

    useEffect(() => {
        getUser();
    }, []);
    return (
        <AdminLayout>
            {!isInitLoading && (
                <section className="box pb-6 px-4 py-2 rounded-lg">
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
                    <Select defaultSelectedKeys={[selectedRole || ""]} 
                        onSelectionChange={handleSelectChange}>
                        {
                            roles.map(({value, label}) => (
                                <SelectItem key={value} value={value}>
                                    {label}
                                </SelectItem>
                            ))
                        }
                    </Select>
                </div>
                <Button color="warning" onClick={handleSave}>
                    Save
                </Button>
            </section>
            )}
            {(isLoading || isInitLoading) && (
                <Spinner color="danger" className="absolute top-1/2 left-1/2"/>
            )}
        </AdminLayout>
    );
}

export default User;