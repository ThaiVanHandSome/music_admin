import { Button, Link, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@nextui-org/react";
import { useEffect, useState } from "react";
import AdminLayout from "~/layouts/AdminLayout";
import { getAllUsers } from "~/services/ApiServices/UserService";

function Role() {
    const [users, setUsers] = useState([]);

    const getInitData = async () => {
        const res = await getAllUsers();
        setUsers(res);
    }

    useEffect(() => {
        getInitData();
    }, []);
    return (
        <section>
            <AdminLayout>
                <section>
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
                                            <Link href={`/admin/user/${user.idUser}`} className="me-2" size="sm" color="warning">Edit</Link>
                                            <Button size="sm" color="danger">Delete</Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </section>
            </AdminLayout>
        </section>
    );
}

export default Role;