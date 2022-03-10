import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../redux/features/users/usersSlice";
import Title from "../../Shared/Title/Title";
import User from "./User/User";

const Users = () => {
    const dispatch = useDispatch();
    const usersState = useSelector((state) => state.users);
    const { error, loading, users } = usersState;
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <div>
            <Title>
                User list from JSON place holder (a fake rest api) using
                <span className="font-bold text-indigo-700">
                    {" "}
                    <a
                        href="https://redux-toolkit.js.org/api/createAsyncThunk"
                        target="_blank"
                        rel="noreferrer"
                        className=" border-b-2 border-red-400"
                    >
                        createAsyncThunk
                    </a>
                </span>
            </Title>
            <div className="flex justify-center items-center">
                {loading && (
                    <div className=" shadow  p-4 max-w-sm w-full mx-auto">
                        <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                            <div className="flex-1 space-y-6 py-1">
                                <div className="h-2 bg-slate-200 rounded"></div>
                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                                        <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                                    </div>
                                    <div className="h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {error && (
                    <p className="text-red-400 text-center ">
                        Couldn't load users
                    </p>
                )}
                {!loading && !error && users.length > 0 && (
                    <div class="flex flex-col">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full">
                                        <thead class="bg-white border-b">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                >
                                                    #
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                >
                                                    Username
                                                </th>
                                                <th
                                                    scope="col"
                                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                >
                                                    Email
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users?.map((item, index) => (
                                                <User
                                                    key={item.id}
                                                    user={item}
                                                    index={index}
                                                ></User>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Users;
