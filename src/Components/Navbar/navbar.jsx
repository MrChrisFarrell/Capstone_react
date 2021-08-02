import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = (props) => {
    if(props.isLoggedIn){
        if(props.user.is_owner){
            return (
                <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav>
                                <Nav.Link href='/employee'>Home</Nav.Link>
                                <Nav.Link href='/ownerCompanyProfile'>Company Profile</Nav.Link>
                                <Nav.Link href='/employee'>User Profile</Nav.Link>
                                <Nav.Link href='/addPromotion'>Add Promotion</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            );
        }else{
            return (
                <>
                <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav>
                                <Nav.Link href='/register'>Register</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </>
            );
        }
    }else{
        return (
            <>
            <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/register'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        );
    }
}

export default Navigation;