import React from "react";

const User = ({ user, index }) => {
    console.log(user);
    return (
        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {index + 1}
            </td>
            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                {user.name}
            </td>
            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                {user.username}
            </td>
            <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                {user.email}
            </td>
        </tr>
    );
};

export default User;
