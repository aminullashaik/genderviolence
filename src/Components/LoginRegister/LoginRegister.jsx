import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                "http://localhost:8083/api/admin/loginUser",
                { email, password },
                { headers: { "Content-Type": "application/json" } }
            );

            if (response.data === true) {
                setMessage("Login successful!");
                navigate("/admin");
            } else {
                setMessage("Invalid email or password. Please try again.");
            }
        } catch (error) {
            if (error.response) {
                setMessage(
                    error.response.data.message || "Invalid credentials. Please try again."
                );
            } else {
                setMessage("Unable to connect to the server. Please try again later.");
            }
            console.error("Error during login:", error);
        }
    };

    return (
        <div>
            {/* Navbar */}
            <header>
                <h2 className="logo">Domestic Violence</h2>
                <nav className="navigation">
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>

            {/* Admin Login Form */}
            <div style={{ maxWidth: "400px", margin: "auto", marginTop: "100px" }}>
                <h2>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                        />
                    </div>
                    <div style={{ marginBottom: "10px" }}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            border: "none",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                    >
                        Login
                    </button>
                </form>
                {message && (
                    <p
                        style={{
                            marginTop: "10px",
                            color: message.includes("successful") ? "green" : "red",
                        }}
                    >
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
};

export default AdminLogin;