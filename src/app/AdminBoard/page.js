import React from 'react';
import AdminHomePage from './AdminHomePage';
import { CommonSection } from '../sectionHook/CommonSection';



const DashBoard = () => {
    const header = 'Admin';
    const title = 'Admin Actions';
    const sectionMarkup = CommonSection(header, title);
    return (
        <div className=''>
            {sectionMarkup}
            <AdminHomePage />

        </div>
    );
};

export default DashBoard;