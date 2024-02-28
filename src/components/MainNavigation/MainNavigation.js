import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favourites-context";
import { useContext } from "react";
import styles from "../MainNavigation/MainNavigation.module.css"

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <Navbar className={styles.container} >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            fontSize: "2.4rem",
            fontWeight: "700",
            color: "hsl(261, 95%, 8%)",
          }}
        >
          MeetupsApp
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className="li"
              as={Link}
              to="/"
              style={{ fontSize: "1.4rem" }}
            >
              All Meetups
            </Nav.Link>
            <Nav.Link
              className="li"
              as={Link}
              to="/new-meetup"
              style={{ fontSize: "1.4rem" }}
            >
              Add New Meetup
            </Nav.Link>
            <Nav.Link
              className="li"
              as={Link}
              to="/my-favorite"
              style={{ fontSize: "1.4rem" }}
            >
              My Favorites
              <span
                style={{
                  marginLeft: "10px",
                  backgroundColor: "#faf8f7",
                  color: "hsl(261, 95%, 8%)",
                  padding: "2.5px 10px",
                  borderRadius: "10px",
                }}
              >
                {favoritesCtx.totalFavorites}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <hr
        style={{
          borderColor: "black",
          backgroundColor: "black",
          height: "1px",
        }}
      />
    </Navbar>
  );
};

export default MainNavigation;

// import { Link } from "react-router-dom";
// import styles from "./MainNavigation.module.css";
// import { useContext } from "react";
// import FavoritesContext from "../../store/favourites-context";

// const MainNavigation = () => {
//   const favoritesCtx = useContext(FavoritesContext);

//   return (
//     <div className={styles.container}>
//       <p className={styles.logo}>Meetups App</p>

//       <ul>
//         <li>
//           <Link to="/">All Meetups</Link>
//         </li>
//         <li>
//           <Link to="/new-meetup">Add New Meetup</Link>
//         </li>
//         <li>
//           <Link to="/my-favorite">
//             My favourites{" "}
//             <span
//               style={{
//                 backgroundColor: "#faf8f7",
//                 color: "hsl(261, 95%, 8%)",
//                 padding: "2.5px 10px",
//                 borderRadius: "10px",
//               }}
//             >
//               {favoritesCtx.totalFavorites}
//             </span>
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default MainNavigation;
