import FooterItem from './FooterItem';

const FooterList = props => {
  return (
    <ul className="grid gap-y-8 pt-[5.8125rem] text-center">
      <FooterItem path="/">Home</FooterItem>
      <FooterItem path="portfolio">Portfolio</FooterItem>
      <FooterItem path="about">About Us</FooterItem>
      <FooterItem path="contact">Contact</FooterItem>
    </ul>
  );
};

export default FooterList;
