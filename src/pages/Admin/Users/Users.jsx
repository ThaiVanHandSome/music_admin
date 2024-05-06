import { Button, Input, Link, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useEffect, useState } from "react";
import AdminLayout from "~/layouts/AdminLayout";
import { getAllUsers, getUserByEmail } from "~/services/ApiServices/UserService";

function Role() {
    const [users, setUsers] = useState([]);
    const [emailSearch, setEmailSearch] = useState("");

    const getInitData = async () => {
        const res = await getAllUsers();
        setUsers(res);
    }

    const handleSearch = async () => {
        const res = await getUserByEmail(emailSearch);
        if(!res) {
            setUsers([]);
            return;
        }
        setUsers([res]);
    }

    useEffect(() => {
        getInitData();
    }, []);
    return (
        <section>
            <AdminLayout>
                <section>
                    <div className="flex items-center mb-4">
                        <Input type="email" value={emailSearch} onChange={(e) => setEmailSearch(e.target.value)} label="Enter email..." className="w-1/2 me-4"/>
                        <Button onClick={handleSearch} color="warning" className="me-4">Search</Button>
                        <Button onClick={getInitData} color="primary">Reset</Button>
                    </div>
                    <Table isStriped>
                        <TableHeader>
                            <TableColumn>Id</TableColumn>
                            <TableColumn>NickName</TableColumn>
                            <TableColumn>FirstName</TableColumn>
                            <TableColumn>LastName</TableColumn>
                            <TableColumn>Gender</TableColumn>
                            <TableColumn>Email</TableColumn>
                            <TableColumn>PhoneNumber</TableColumn>
                            <TableColumn>Role</TableColumn>
                            <TableColumn>Action</TableColumn>
                        </TableHeader>
                        {users.length !== 0 && (
                            <TableBody>
                            {users.map((user, index) => (
                                <TableRow key={index}>
                                    <TableCell>{user.idUser}</TableCell>
                                    <TableCell>{user.nickname}</TableCell>
                                    <TableCell>{user.firstName}</TableCell>
                                    <TableCell>{user.lastName}</TableCell>
                                    <TableCell>{user.gender == 0 ? "Nữ" : "Nam"}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phoneNumber}</TableCell>
                                    <TableCell>{user.role}</TableCell>
                                    <TableCell>
                                        <div className="flex items-center">
                                            <Link href={`/admin/user/${user.idUser}`} className="me-2 px-4 py-1 bg-warning-500 text-white rounded-md" size="sm" color="warning">Edit</Link>
                                            <Button size="sm" color="danger">Delete</Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        )}
                        {users.length === 0 && (
                            <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
                        )}
                    </Table>
                </section>
            </AdminLayout>
        </section>
    );
}

export default Role;