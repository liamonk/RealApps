import { Link, useHistory } from "react-router-dom"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export const Header = () => {
  const history = useHistory()
  return (
    <>
     <SideNav
                onSelect={(selected : string) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="devices">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Devices
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
    <Link to="/countdown">Countdown</Link>
    <Link to="/piandseek">PiAndSeek</Link>
      <h1>RealApps</h1>
    </>
  );
};
