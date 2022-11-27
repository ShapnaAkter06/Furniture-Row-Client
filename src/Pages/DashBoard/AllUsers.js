import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Spinner from '../../Components/Spinner/Spinner';

const AllUsers = () => {
    //load all user
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-jet.vercel.app/users')
            const data = await res.json();
            return data;
        }
    })

    // delete user
    const handleDeleteUser = user => {
        const proceed = window.confirm("Are you sure want to delete this user?");
        if (proceed) {
            fetch(`https://assignment-12-server-jet.vercel.app/users/${user._id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch()
                        toast.success('Successfully deleted')
                    }
                })
        }
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }


    return (
        <div>
            <h2 className="text-3xl mb-5 ml-5">All Buyers And Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.role}</td>
                                    <td><button onClick={() => handleDeleteUser(user)} className='btn btn-xs btn-error'>Delete</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;