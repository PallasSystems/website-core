import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { BannerNavBarDefaultData } from './BannerNavBar.data';
import { PallasSVG } from '../Common/index';
const BannerNavBar = ({ brandName, brandImg, items }) => {
    const name = undefined === brandName || null == brandName ? BannerNavBarDefaultData.brandName : brandName;
    const img = undefined === brandImg || null == brandImg ? BannerNavBarDefaultData.brandImg : brandImg;
    const links = undefined === items || null == items ? BannerNavBarDefaultData.items : items;
    return (React.createElement("header", null,
        React.createElement(Navbar, { expand: 'sm', bg: 'dark', variant: 'dark', fixed: 'top' },
            React.createElement(Container, { fluid: true },
                React.createElement(LinkContainer, { to: '/' },
                    React.createElement(Navbar.Brand, { id: 'BannerNavBar.Brand.Link.Logo', className: 'text-light' },
                        React.createElement(PallasSVG, { ...img }),
                        ' ')),
                React.createElement(LinkContainer, { to: '/' },
                    React.createElement(Navbar.Brand, { id: 'BannerNavBar.Brand.Link.Logo.text', className: 'text-light' }, name)),
                React.createElement(Navbar.Toggle, { id: 'responsive-navbar-btn', "aria-controls": 'responsive-navbar-nav' }),
                React.createElement(Navbar.Collapse, { id: 'responsive-navbar-nav', className: 'justify-content-end' },
                    React.createElement(Nav, { className: 'd-flex' }, links.map((link, index) => {
                        return (React.createElement(LinkContainer, { key: 'BannerNavBar.Link.' + index, to: link.path },
                            React.createElement(Nav.Link, { key: 'BannerNavBar.Link.Text.' + index, id: 'BannerNavBar.Link.Text.' + index }, link.text)));
                    })))))));
};
export { BannerNavBar };
//# sourceMappingURL=BannerNavBar.components.js.map