import { FaFilePdf } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrAnnounce } from "react-icons/gr";
import { FaUsers } from "react-icons/fa";
// Components
import MenuItem from './MenuItem'

const AdminMenu = () => {
    return (
        <>
          <MenuItem
                icon={CgProfile}
                label='Admin Profile'
                address='/dashboard'
              />
              <MenuItem
                icon={FaUsers}
                label='Manage Members'
                address='/dashboard/manageMember'
              />
              <MenuItem
                icon={GrAnnounce}
                label='Announcement'
                address='/dashboard/adminAnnouncement'
              />

              <MenuItem
                icon={FaFilePdf}
                label='Agreement Request'
                address='/dashboard/agreement'
              />

              <MenuItem
                icon={MdDiscount}
                label='Coupons'
                address='/dashboard'
              />  
        </>
    );
};

export default AdminMenu;