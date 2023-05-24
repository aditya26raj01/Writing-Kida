import { useSelector } from "react-redux";
import "./Profile.css";

const Profile = () => {
    const { user } = useSelector((state) => state.store);
    return (
        <div className="container">
            <h2>Profile Information</h2>
            <img src={user ? user.profileImage : ""} alt="" className="profile-image" />
            <table className="manage-post-table profile">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Location</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user ? user.firstName : ""}</td>
                        <td>{user ? user.lastName : ""}</td>
                        <td className="white-space word-wrap"><strong>{user ? user.userName : ""}</strong></td>
                        <td className="white-space word-wrap">{user ? user.email : ""}</td>
                        <td>+91 {user ? user.phone : ""}</td>
                        <td className="white-space word-wrap">{user ? user.location : ""}</td>
                        <td>{user ? user.roles[1] ? user.roles[1]:user.roles[0]:user.roles[0]}</td>
                    </tr>
                </tbody>
            </table>
            <table className="manage-post-mobile profile">
                <tbody>
                    <tr>
                        <th>First Name</th>
                        <td>{user ? user.firstName : ""}</td>
                    </tr>
                    <tr>
                        <th>Last Name</th>
                        <td>{user ? user.lastName : ""}</td>
                    </tr>
                    <tr>
                        <th>User Name</th>
                        <td className="word-wrap"><strong>{user ? user.userName : ""}</strong></td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td className="word-wrap">{user ? user.email : ""}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>+91 {user ? user.phone : ""}</td>
                    </tr>
                    <tr>
                        <th>Location</th>
                        <td className="word-wrap">{user ? user.location : ""}</td>
                    </tr>
                    <tr>
                        <th>Role</th>
                        <td>{user ? user.roles[1] ? user.roles[1]:user.roles[0]:user.roles[0]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Profile;