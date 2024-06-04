import styled from "@emotion/styled";

const LogoImg = styled.img({
  top: '.2em',
  right: '.2em',
  position: 'relative',
  height: '1em',
  width: '1em',
  ':hover': {
    filter: 'invert(0.5)'
  }
})

const LogoLink = (props: { logo: string, link: string, label: string }) => (
  <a href={props.link} style={{ 
    padding: "auto .5em auto .5em" 
    }}>
    <LogoImg src={props.logo} width="1.5em" />
    {props.label}
  </a>
)

const ResumeLogoBar = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', color: 'black', paddingTop: '1em' }}>
    <LogoLink logo="https://akveo.github.io/eva-icons/outline/svg/globe-outline.svg"
      link="https://chefyeum.github.io"
      label="chefyeum.github.io" />
    <LogoLink logo="https://akveo.github.io/eva-icons/outline/svg/phone-outline.svg"
      link="tel:+447475232777"
      label="+44 7475 232777" />
    <LogoLink logo="https://simpleicons.org/icons/github.svg"
      link="https://github.com/chefyeum"
      label="GitHub.com/ChefYeum" />
    <LogoLink logo="https://simpleicons.org/icons/linkedin.svg"
      link="https://linkedin.com/in/chefyeum"
      label="Linkedin.com/in/ChefYeum" />
    <LogoLink logo="https://akveo.github.io/eva-icons/outline/svg/email-outline.svg"
      link="mailto:chefyeum@gmail.com"
      label="ChefYeum@gmail.com" />
  </div>
)

export default ResumeLogoBar