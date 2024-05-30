import { Link, useHistory } from "react-router-dom"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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
                    <NavItem eventKey="PiAndSeek">
                        <NavIcon>
                            <i className="fa fa-pie-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            PiAndSeek
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="countdown">
                        <NavIcon>
                            <i className="fa fa-hourglass" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Countdown
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
      <h1>RealApps</h1>
    </>
  );
};
