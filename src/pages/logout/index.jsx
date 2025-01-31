import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "utils/constant/routes";
import { api } from "utils/api/api";

export const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            delete api.defaults.headers.Authorization;
            localStorage.removeItem("access");
            localStorage.removeItem("refresh");
            navigate(LOGIN);
        };

        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='text-7-000 text-2xl h-full flex flex-col items-center justify-center'>
            در حال خروج ...
        </div>
    );
};
