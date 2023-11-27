import { FaCcMastercard } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { CgProfile } from "react-icons/cg";
import { GiHistogram } from "react-icons/gi";
import { GrAnnounce } from "react-icons/gr";

const MemberMenu = () => {
    return (
        <>
            <MenuItem
                icon={CgProfile}
                label='Member Profile'
                address='/dashboard/memberHome'
            />

            <MenuItem
                icon={FaCcMastercard}
                label='Make Payment'
                address='/dashboard/payment'
            />
            <MenuItem
                icon={GiHistogram}
                label='Payment History'
                address='/dashboard'
            />

            <MenuItem
                icon={GrAnnounce}
                label='Announcement'
                address='/dashboard/announcements'
            />
        </>
    );
};

export default MemberMenu;