import MenuItem from "./MenuItem";
import { CgProfile } from "react-icons/cg";
import { GrAnnounce } from "react-icons/gr";

const UserMenu = () => {
    return (
        <>
            <MenuItem
                icon={CgProfile}
                label='User Profile'
                address='/dashboard/userHome'
            />

            <MenuItem
                icon={GrAnnounce}
                label='Announcement'
                address='/dashboard/announcements'
            />
        </>
    );
};

export default UserMenu;