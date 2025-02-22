import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
import { Avatar } from 'primereact/avatar';



function Navbar() {
    const items: MenuItem[] = [
        {
            label: 'Trending',
            icon: 'pi pi-home'
        },
        {
            label: 'Movies',
            icon: 'pi pi-star'
        },
        {
            label: 'Shows',
            icon: 'pi pi-star'
        }
    ]

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}

export default Navbar