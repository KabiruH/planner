import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    //👇🏻 The ID is the URL parameter for fetching the user's details.
    const navigate = useNavigate ()
    useEffect(() => {
        if (!localStorage.getItem("_id")) {
            navigate("/");
        }
    }, [navigate]);

    const { id } = useParams();

    
    

    return (
        <main className='profile'>
            <div style={{ width: "70%" }}>
                <h2>Hey, nevodavid</h2>
                <p>Here is your schedule: WAT</p>
                <table>
                    <tbody>
                        <tr>
                            <td>MON</td>
                            <td>8:00am</td>
                            <td>10:00pm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Profile;
