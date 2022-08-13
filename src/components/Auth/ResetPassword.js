import React, { useContext, useState } from "react";
import Container from "../common/Container";
import { AuthContext } from "../Providers/AuthProvider";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPassword = () => {

    const [auth] = useContext(AuthContext);

    const [query, setQuery] = useState({
        email: ""
    });

    const updateForm = (field, value) => {
        setQuery({
            ...query,
            [field]: value
        })
    }

    const onSubmit = () => {
        const data = query;
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "center"
        }}>
            <h1>
                
            </h1>
            <div className="box-border3">
                <ResetPasswordForm
                    query={query}
                    onChange={updateForm}
                    onSubmit={onSubmit}
                />
            </div>
        </div>
    )
}

export default ResetPassword;