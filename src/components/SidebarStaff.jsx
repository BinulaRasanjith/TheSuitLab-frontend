import Group277 from '../assets/images/Group277.png'


// eslint-disable-next-line react/prop-types
function SidebarItem({ label, children }) {
    return (
        <li className='pl-5 pr-2'>
            {label}
            {children && <ul>{children}</ul>}
        </li>
    );
}

// eslint-disable-next-line react/prop-types
function SecondLevelItem({ label, children }) {
    return (
        <li className='pl-10 pr-2'>
            {label}
            {children && <ul>{children}</ul>}
        </li>
    );
}

// eslint-disable-next-line react/prop-types
function ThirdLevelItem({ label, children }) {
    return (
        <li className='pl-8 pr-2'>
            {label}
            {children && <ul>{children}</ul>}
        </li>
    );
}



const SidebarStaff = () => {
    return (
        <div className='flex flex-col justify-between bg-white min-h-screen max-w-max drop-shadow-2xl pt-40 md:pt-20'>

            <ul className="sidebar">
                <SidebarItem label="Dashboard" />
                <SidebarItem label="Employees" />
                <SidebarItem label="Customers" />
                <SidebarItem label="Orders" />
                <SidebarItem label="Notification" />
                <SidebarItem label="Reviews" />
                <SidebarItem label="Profile" />

                {/* <SidebarItem label="Employees">
                    <SecondLevelItem label="Suits">
                        <ThirdLevelItem label="Wedding Suits" />
                        <ThirdLevelItem label="Custom Suits" />
                    </SecondLevelItem>
                    <SecondLevelItem label="Shirts" />
                    <SecondLevelItem label="Trousers" />
                    <SecondLevelItem label="Blazers" />
                    <SecondLevelItem label="Waistcoats" />
                </SidebarItem>
                <SidebarItem label="Footwear">
                    <SecondLevelItem label="Subitem 3.1">
                        <ThirdLevelItem label="Sub-subitem 1" />
                        <ThirdLevelItem label="Sub-subitem 2" />
                    </SecondLevelItem>
                    <SecondLevelItem label="Subitem 3.2" />
                </SidebarItem>
                <SidebarItem label="Accessories" />
                <SidebarItem label="About Us" /> */}

            </ul>


            <div className='flex items-center justify-center pb-5 pt-5'>
                <img src={Group277} alt="Group277" />
            </div>
            <div >
                <ul className="sidebar p">
                    <SidebarItem label="Logout" />
                </ul>
            </div>

        </div>
    )
}

export default SidebarStaff