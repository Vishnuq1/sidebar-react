import React from 'react'
import DraftsIcon from '@mui/icons-material/Drafts';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import EmailIcon from '@mui/icons-material/Email';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import ReceiptIcon from '@mui/icons-material/Receipt';
import Person3Icon from '@mui/icons-material/Person3';
import AbcIcon from '@mui/icons-material/Abc';
import AppsIcon from '@mui/icons-material/Apps';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
// import { BrowserRouter } from 'react-router-dom';

export const SidebarData =
[
        {
          title: "Dashboards",
          icon: <DraftsIcon />,
          link: "/Dashboard"
      },
      {
          title: "Analytics",
          icon: <ArrowDropDownOutlinedIcon />,
              link: "/analytics"
          },
      {
          title: "ecommerse",
          icon: <ArrowDropDownOutlinedIcon />,
              link: "/ecommerce"
          },
      {
          title: "CRM",
          icon: <ArrowDropDownOutlinedIcon />,
              link: "/crm"
        },
       {
           title: "APPS & PAGES",
           link: "/home",
        //    id: 1
           
        },
        {
             title: "Email",
          icon: <EmailIcon />,
              link: "/email"
        },
         {
             title: "Calender",
          icon: <CalendarMonthIcon />,
              link: "/calender"
        },
          {
             title: "Invoice",
          icon: <ReceiptIcon />,
              link: "/invoice"
        },
           {
             title: "User",
          icon: <DescriptionIcon />,
              link: "/user"
        },
            {
             title: "Pages",
          icon: <Person3Icon />,
              link: "/pages"
        },
             {
             title: "UI ELEMENTS",
             id:1
        },
            {
             title: "Typography",
          icon: <AbcIcon />,
              link: "/typography"
        },
             {
             title: "Icons",
          icon: <AppsIcon />,
              link: "/icon"
        },
              {
             title: "Cards",
          icon: <ViewCarouselIcon />,
              link: "/cards"
        },
               {
             title: "Components",
          icon: <BrandingWatermarkIcon />,
              link: "/components"
        },
    ]
 
 
//  function SidebarData() {
//    return (
//        <>
//             <BrowserRouter>
//        <Routes>
//             <Route exact path="/" element={<Dashboard />} />
//            </Routes>
           


// </BrowserRouter>

//        </>
//    )
//  }
 
// export default SidebarData;    
    
    
    
    


