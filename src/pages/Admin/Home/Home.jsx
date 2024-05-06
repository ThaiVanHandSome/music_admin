import { faMusic, faPalette, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardHeader, Divider } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { CardBody } from 'reactstrap';
import AdminLayout from '~/layouts/AdminLayout'
import { countSongs } from '~/services/ApiServices/SongService';
import { countArtists, countUsers } from '~/services/ApiServices/UserService';

function Home() {
    const [cntSongs, setCntSongs] = useState(0);
    const [cntUsers, setCntUsers] = useState(0);
    const [cntArtists, setCntArtists] = useState(0);

    const getInitData = async () => {
        const cntS = await countSongs();
        const cntU = await countUsers();
        const cntA = await countArtists();
        setCntSongs(cntS);
        setCntUsers(cntU);
        setCntArtists(cntA);
    }

    useEffect(() => {
        getInitData();
    }, []);

    return (
        <AdminLayout>
            <section className='flex w-full'>
                <div className='w-1/3 p-4'>
                    <Card className='bg-red-500'>
                        <CardHeader className='flex justify-between items-center px-6 py-2'>
                            <span className='text-2xl text-bold text-white'>Tổng Số Bài Hát</span>
                            <FontAwesomeIcon icon={faMusic} className='text-3xl text-white'/>
                        </CardHeader>
                        <Divider />
                        <CardBody className='py-4 flex items-center justify-center'>
                            <span className='text-4xl text-bold text-white'>{cntSongs}</span>
                        </CardBody>
                    </Card>
                </div>
                <div className='w-1/3 p-4'>
                    <Card className='bg-sky-500'>
                        <CardHeader className='flex justify-between items-center px-6 py-2'>
                            <span className='text-2xl text-bold text-white'>Tổng Số Nghệ Sĩ</span>
                            <FontAwesomeIcon icon={faPalette} className='text-3xl text-white'/>
                        </CardHeader>
                        <Divider />
                        <CardBody className='py-4 flex items-center justify-center'>
                            <span className='text-4xl text-bold text-white'>{cntArtists}</span>
                        </CardBody>
                    </Card>
                </div>
                <div className='w-1/3 p-4'>
                    <Card className='bg-cyan-400'>
                        <CardHeader className='flex justify-between items-center px-6 py-2'>
                            <span className='text-2xl text-bold text-white'>Tổng Số Người Dùng</span>
                            <FontAwesomeIcon icon={faUser} className='text-3xl text-white'/>
                        </CardHeader>
                        <Divider />
                        <CardBody className='py-4 flex items-center justify-center'>
                            <span className='text-4xl text-bold text-white'>{cntUsers}</span>
                        </CardBody>
                    </Card>
                </div>
            </section>
        </AdminLayout>
    );
}

export default Home;