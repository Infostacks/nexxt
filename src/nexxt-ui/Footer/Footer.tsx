/* eslint-disable react/jsx-key */
import React from "react";
import {
  Twitter,
  Facebook,
  Instagram,
  Footer,
  TopBar,
  GetTheApp,
  GetTheAppTitle,
  AppStoreApp,
  GoogleApp,
  DesktopSocialList,
  HR,
  BottomBar,
  Menu,
  MenuHead,
  MenuLink,
  MobileSocialList,
  Policy,
  PolicyRow,
} from "./Footer.styles";

const menu = [
  {
    name: "Program Guides",
    links: [
      { title: "Rough Around The Edges", url: "www.openfit.com" },
      { title: "Xtend Barre", url: "www.openfit.com" },
      { title: "600 Seconds", url: "www.openfit.com" },
      { title: "Yoga52", url: "www.openfit.com" },
    ],
  },
  {
    name: "About Us",
    links: [
      { title: "About Openfit", url: "www.openfit.com" },
      { title: "Help and Feedback", url: "www.openfit.com" },
      { title: "Terms and Condition", url: "www.openfit.com" },
      { title: "Privacy Policy", url: "www.openfit.com" },
      { title: "FAQ", url: "www.openfit.com" },
    ],
  },
];

const SocialList = () => (
  <>
    <Twitter />
    <Facebook />
    <Instagram />
  </>
);

function FooterApp() {
  return (
    <Footer>
      <TopBar>
        <GetTheApp>
          <GetTheAppTitle> Get The App</GetTheAppTitle>
          <AppStoreApp />
          <GoogleApp />
        </GetTheApp>
        <DesktopSocialList>
          <SocialList />
        </DesktopSocialList>
      </TopBar>
      <HR />
      <BottomBar>
        {menu.map(({ name, links }) => (
          <Menu>
            <MenuHead>{name}</MenuHead>
            {links.map(({ title, url }) => (
              <MenuLink href={url}>{title}</MenuLink>
            ))}
          </Menu>
        ))}
        <MobileSocialList>
          <SocialList />
        </MobileSocialList>
        <Policy>
          <PolicyRow>© 2019 Openfit, LLC. All rights reserved.</PolicyRow>
          <PolicyRow>
            +Results vary depending on starting point and effort. Exercise and
            proper diet are necessary to achieve and maintain weight loss and
            muscle definition. The testimonials featured may have used more than
            one product or extended the program to achieve their maximum
            results.
          </PolicyRow>
          <PolicyRow>
            Consult your physician and follow all safety instructions before
            beginning any exercise program or using any supplement or meal
            replacement product, especially if you have any unique medical
            conditions or needs. The contents on our website are for
            informational purposes only, and are not intended to diagnose any
            medical condition, replace the advice of a healthcare professional,
            or provide any medical advice, diagnosis, or treatment.
          </PolicyRow>
          <PolicyRow>
            As an Amazon Associate, we may earn from qualifying purchases.
          </PolicyRow>
        </Policy>
      </BottomBar>
    </Footer>
  );
}
export default FooterApp;
